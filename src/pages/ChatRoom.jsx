import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../components/Toast'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import EmptyState from '../components/EmptyState'
import { 
  ROOMS, 
  getChatMessages, 
  sendMessage, 
  likeMessage, 
  blockUser, 
  reportMessage, 
  isUserBlocked,
  isUserInvitedToGroup,
  requestGroupInvite,
  giveKudos,
  getUserKudos,
  hasGivenKudos,
  getTopUsersInRoom,
  canBecomeGroupAdmin,
  isGroupAdmin,
  getPendingRequests,
  approveGroupInvite,
  denyGroupInvite,
  getActiveNeighborsInRoom,
  getUpcomingEvents,
  isNeighborBond,
  sendBondRequest,
  getPhotoUploadStatus
} from '../data/mockData'
import './ChatRoom.css'

export default function ChatRoom({ embedded = false, roomId: propRoomId }) {
  const { roomId: paramRoomId } = useParams()
  const roomId = propRoomId || paramRoomId
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const { showSuccess, showError, showWarning } = useToast()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [showMenu, setShowMenu] = useState(null)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [showActiveNeighbors, setShowActiveNeighbors] = useState(false)
  const [activeNeighbors, setActiveNeighbors] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [replyingTo, setReplyingTo] = useState(null)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [showPhotoStatus, setShowPhotoStatus] = useState(false)
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)
  const fileInputRef = useRef(null)

  const room = ROOMS.find(r => r.id === roomId)

  useEffect(() => {
    if (!room) {
      navigate('/home')
      return
    }

    const loadedMessages = getChatMessages(roomId)
    setMessages(loadedMessages)
    setActiveNeighbors(getActiveNeighborsInRoom(roomId, 10))
    setUpcomingEvents(getUpcomingEvents(roomId).slice(0, 3))
  }, [roomId, room, navigate])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    
    if (!newMessage.trim() && !selectedPhoto) return

    if (selectedGroup) {
      const group = room.groups?.find(g => g.id === selectedGroup)
      if (group?.inviteOnly && !isUserInvitedToGroup(currentUser.id, selectedGroup)) {
        showError('You need to be invited to this group to send messages.')
        return
      }
    }

    const message = sendMessage(
      roomId,
      currentUser.id,
      currentUser.displayName,
      newMessage || '',
      selectedGroup,
      replyingTo,
      photoPreview
    )

    setMessages(prev => [...prev, message])
    setNewMessage('')
    setReplyingTo(null)
    setSelectedPhoto(null)
    setPhotoPreview(null)
  }

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      showError('Please select an image file')
      return
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      showError('Photo must be smaller than 5MB')
      return
    }

    // Check eligibility
    const status = getPhotoUploadStatus(currentUser.id, roomId)
    if (!status.canUpload) {
      if (!status.hasPermission) {
        showError(`You need ${status.kudosNeeded} more kudos to upload photos (10 total required)`)
      } else {
        showError(`Daily photo limit reached (${status.dailyLimit} per day)`)
      }
      return
    }

    setSelectedPhoto(file)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setPhotoPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleRemovePhoto = () => {
    setSelectedPhoto(null)
    setPhotoPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handlePhotoButtonClick = () => {
    const status = getPhotoUploadStatus(currentUser.id, roomId)
    if (!status.hasPermission) {
      setShowPhotoStatus(true)
      return
    }
    fileInputRef.current?.click()
  }

  const handleGroupSelect = (groupId) => {
    setSelectedGroup(groupId)
  }

  const handleRequestInvite = (groupId) => {
    const result = requestGroupInvite(currentUser.id, groupId, roomId)
    if (result.success) {
      showSuccess(result.message)
    } else {
      showWarning(result.message)
    }
  }

  const handleGiveKudos = (toUserId) => {
    const result = giveKudos(currentUser.id, toUserId, roomId)
    if (result.success) {
      showSuccess('Kudos given! ⭐')
      setMessages(prev => [...prev])
    } else {
      showError(result.message)
    }
  }

  const handleApproveInvite = (groupId, userId) => {
    const result = approveGroupInvite(currentUser.id, groupId, userId)
    if (result.success) {
      showSuccess(result.message)
      setShowAdminPanel(false)
    } else {
      showError(result.message)
    }
  }

  const handleDenyInvite = (groupId, userId) => {
    const result = denyGroupInvite(currentUser.id, groupId, userId)
    if (result.success) {
      showSuccess('Request denied')
      setShowAdminPanel(false)
    } else {
      showError(result.message)
    }
  }

  const handleQuickBondRequest = (userId, displayName) => {
    const result = sendBondRequest(
      currentUser.id,
      userId,
      `Hi! I'd love to connect - we're both active in ${room.name}!`,
      roomId
    )
    
    if (result.success) {
      showSuccess(result.message)
      setActiveNeighbors(getActiveNeighborsInRoom(roomId, 10))
    } else {
      showError(result.message)
    }
  }

  const handleLikeMessage = (messageId) => {
    likeMessage(messageId)
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, likes: msg.likes + 1 }
        : msg
    ))
  }

  const handleBlockUser = (userId, displayName) => {
    blockUser(currentUser.id, userId)
    setMessages(prev => prev.filter(msg => msg.userId !== userId))
    setShowMenu(null)
    showWarning(`Blocked ${displayName}`)
  }

  const handleReportMessage = (messageId, displayName) => {
    reportMessage(messageId, currentUser.id, 'Inappropriate content')
    showSuccess('Message reported. Our team will review it.')
    setShowMenu(null)
  }

  const handleReplyToMessage = (message) => {
    setReplyingTo(message)
    setShowMenu(null)
  }

  const handleCancelReply = () => {
    setReplyingTo(null)
  }

  const photoStatus = getPhotoUploadStatus(currentUser.id, roomId)

  const filteredMessages = messages.filter(msg => {
    if (isUserBlocked(currentUser.id, msg.userId)) return false
    
    if (selectedGroup) {
      return msg.group === selectedGroup
    }
    
    if (msg.group) {
      const group = room.groups?.find(g => g.id === msg.group)
      if (group?.inviteOnly && !isUserInvitedToGroup(currentUser.id, msg.group)) {
        return false
      }
    }
    
    return true
  })

  if (!room) return null

  const isOwnMessage = (msg) => msg.userId === currentUser.id

  const handleBack = () => {
    if (embedded) {
      navigate('/dashboard')
    } else {
      navigate('/home')
    }
  }

  return (
    <div className="chatroom-container">
      <header className="chatroom-header">
        <button onClick={handleBack} className="chatroom-back-btn" aria-label="Back">
          ←
        </button>
        <div className="chatroom-header-info">
          <div className="chatroom-title-row">
            <span className="chatroom-emoji">{room.emoji}</span>
            <div>
              <h2 className="chatroom-title">{room.name}</h2>
              <p className="chatroom-subtitle">{room.description}</p>
            </div>
          </div>
        </div>
        <button 
          className="chatroom-leaderboard-btn"
          onClick={() => setShowLeaderboard(!showLeaderboard)}
          aria-label="View leaderboard"
          title="Top contributors"
        >
          🌟
        </button>
      </header>

      <div className="chatroom-kudos-bar">
        <div className="kudos-display">
          <span>Your Kudos: ⭐ {getUserKudos(currentUser.id, roomId)}</span>
        </div>
        <div className="kudos-badges">
          {photoStatus.hasPermission && (
            <span className="photo-unlocked-badge" title={`Photos uploaded today: ${photoStatus.dailyCount}/${photoStatus.dailyLimit}`}>
              📸 Photos Unlocked
            </span>
          )}
          {!photoStatus.hasPermission && photoStatus.kudosNeeded <= 3 && (
            <span className="photo-progress-badge" title={`${photoStatus.kudosNeeded} more kudos to unlock photos`}>
              📸 {photoStatus.kudosNeeded} to unlock
            </span>
          )}
          {canBecomeGroupAdmin(currentUser.id, roomId) && (
            <span className="admin-eligible-badge">✨ Admin Eligible</span>
          )}
        </div>
      </div>

      {showLeaderboard && (
        <div className="chatroom-overlay" onClick={() => setShowLeaderboard(false)}>
          <div className="chatroom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🌟 Most Respected Neighbors</h3>
              <button className="modal-close-btn" onClick={() => setShowLeaderboard(false)}>✕</button>
            </div>
            <div className="leaderboard-list">
              {getTopUsersInRoom(roomId, 10).map((user, index) => (
                <div key={user.userId} className={`leaderboard-item ${index < 5 ? 'top-five' : ''}`}>
                  <span className="leaderboard-rank">{index + 1}</span>
                  <Avatar 
                    initials={user.displayName[0]}
                    size="sm"
                  />
                  <span className="leaderboard-name">{user.displayName}</span>
                  <span className="leaderboard-kudos">⭐ {user.kudos}</span>
                  {index < 5 && <span className="leaderboard-badge">Admin</span>}
                </div>
              ))}
            </div>
            <p className="leaderboard-info">
              💡 Top 5 members can create and manage groups. Give kudos to helpful neighbors!
            </p>
          </div>
        </div>
      )}

      {showAdminPanel && selectedGroup && isGroupAdmin(currentUser.id, selectedGroup) && (
        <div className="chatroom-overlay" onClick={() => setShowAdminPanel(false)}>
          <div className="chatroom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>⚙️ Manage Group</h3>
              <button className="modal-close-btn" onClick={() => setShowAdminPanel(false)}>✕</button>
            </div>
            <div className="admin-panel-content">
              <h4>Pending Requests</h4>
              {getPendingRequests(selectedGroup).length === 0 ? (
                <EmptyState 
                  icon="✓"
                  title="All caught up"
                  description="No pending requests"
                />
              ) : (
                <div className="requests-list">
                  {getPendingRequests(selectedGroup).map((request) => (
                    <div key={request.userId} className="request-item">
                      <Avatar initials={request.displayName[0]} size="md" />
                      <span className="request-name">{request.displayName}</span>
                      <div className="request-actions">
                        <Button 
                          variant="success"
                          size="sm"
                          onClick={() => handleApproveInvite(selectedGroup, request.userId)}
                        >
                          ✓
                        </Button>
                        <Button 
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDenyInvite(selectedGroup, request.userId)}
                        >
                          ✕
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {room.groups && (
        <div className="chatroom-groups">
          <button
            className={`group-tab ${!selectedGroup ? 'group-tab--active' : ''}`}
            onClick={() => setSelectedGroup(null)}
          >
            All
          </button>
          {room.groups.map((group) => {
            const hasAccess = !group.inviteOnly || isUserInvitedToGroup(currentUser.id, group.id)
            const isLocked = group.inviteOnly && !hasAccess
            const isAdmin = isGroupAdmin(currentUser.id, group.id)
            
            return (
              <div key={group.id} className="group-tab-wrapper">
                <button
                  className={`group-tab ${selectedGroup === group.id ? 'group-tab--active' : ''} ${isLocked ? 'group-tab--locked' : ''}`}
                  onClick={() => {
                    if (isLocked) {
                      handleRequestInvite(group.id)
                    } else {
                      handleGroupSelect(group.id)
                    }
                  }}
                  title={group.description || group.name}
                >
                  <span>{group.emoji}</span>
                  <span>{group.name}</span>
                  {isLocked && <span className="lock-icon">🔒</span>}
                  {isAdmin && selectedGroup === group.id && (
                    <button 
                      className="group-admin-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowAdminPanel(!showAdminPanel)
                      }}
                      title="Manage group"
                    >
                      ⚙️
                    </button>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      )}

      <main className="chatroom-messages" ref={messagesContainerRef}>
        {filteredMessages.length === 0 ? (
          <EmptyState 
            icon="💬"
            title="No messages yet"
            description="Start the conversation! Say hello to your neighbors."
          />
        ) : (
          filteredMessages.map((msg) => (
            <div key={msg.id} className={`message-bubble ${isOwnMessage(msg) ? 'message-bubble--own' : ''}`}>
              {!isOwnMessage(msg) && (
                <Avatar 
                  initials={msg.displayName[0]}
                  size="sm"
                  className="message-avatar"
                />
              )}
              <div className="message-content">
                <div className="message-header">
                  {!isOwnMessage(msg) && (
                    <>
                      <Link 
                        to={`/user/${msg.userId}`}
                        className="message-author"
                      >
                        {msg.displayName}
                      </Link>
                      <span className="message-kudos">⭐ {getUserKudos(msg.userId, roomId)}</span>
                    </>
                  )}
                  <span className="message-time">
                    {new Date(msg.timestamp).toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                  {!isOwnMessage(msg) && (
                    <button
                      className="message-menu-btn"
                      onClick={() => setShowMenu(showMenu === msg.id ? null : msg.id)}
                      aria-label="Message options"
                    >
                      ⋮
                    </button>
                  )}
                </div>
                {msg.replyTo && (
                  <div className="message-reply-context">
                    <span className="reply-icon">↩️</span>
                    <div className="reply-details">
                      <span className="reply-author">{msg.replyTo.displayName}</span>
                      <span className="reply-text">{msg.replyTo.message}</span>
                    </div>
                  </div>
                )}
                {msg.photo && (
                  <div className="message-photo-container">
                    <img src={msg.photo} alt="Shared photo" className="message-photo" />
                  </div>
                )}
                {msg.message && <p className="message-text">{msg.message}</p>}
                <div className="message-actions">
                  <button
                    className="message-action-btn"
                    onClick={() => handleLikeMessage(msg.id)}
                    title="Like message"
                  >
                    ❤️ {msg.likes > 0 && <span>{msg.likes}</span>}
                  </button>
                  <button
                    className="message-action-btn"
                    onClick={() => handleReplyToMessage(msg)}
                    title="Reply to message"
                  >
                    💬 Reply
                  </button>
                  {!isOwnMessage(msg) && (
                    <button
                      className={`message-action-btn kudos-btn ${hasGivenKudos(currentUser.id, msg.userId) ? 'kudos-btn--given' : ''}`}
                      onClick={() => handleGiveKudos(msg.userId)}
                      disabled={hasGivenKudos(currentUser.id, msg.userId)}
                      title={hasGivenKudos(currentUser.id, msg.userId) ? 'Kudos given' : 'Give kudos'}
                    >
                      {hasGivenKudos(currentUser.id, msg.userId) ? '✓ Kudos' : '⭐ Kudos'}
                    </button>
                  )}
                </div>

                {showMenu === msg.id && (
                  <div className="message-menu">
                    <button
                      className="message-menu-item"
                      onClick={() => handleReportMessage(msg.id, msg.displayName)}
                    >
                      🚩 Report
                    </button>
                    <button
                      className="message-menu-item message-menu-item--danger"
                      onClick={() => handleBlockUser(msg.userId, msg.displayName)}
                    >
                      🚫 Block
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </main>

      {replyingTo && (
        <div className="chatroom-reply-bar">
          <div className="reply-bar-content">
            <span className="reply-bar-icon">↩️</span>
            <div className="reply-bar-details">
              <span className="reply-bar-label">Replying to {replyingTo.displayName}</span>
              <span className="reply-bar-text">{replyingTo.message}</span>
            </div>
          </div>
          <button 
            className="reply-bar-close"
            onClick={handleCancelReply}
            aria-label="Cancel reply"
          >
            ✕
          </button>
        </div>
      )}

      {photoPreview && (
        <div className="chatroom-photo-preview-bar">
          <div className="photo-preview-content">
            <img src={photoPreview} alt="Preview" className="photo-preview-thumbnail" />
            <span className="photo-preview-label">Photo attached</span>
          </div>
          <button 
            className="photo-preview-close"
            onClick={handleRemovePhoto}
            aria-label="Remove photo"
          >
            ✕
          </button>
        </div>
      )}

      {showPhotoStatus && !photoStatus.hasPermission && (
        <div className="chatroom-photo-status-banner">
          <div className="photo-status-content">
            <span className="photo-status-icon">📸</span>
            <div className="photo-status-text">
              <strong>Photo uploads locked</strong>
              <span>Earn {photoStatus.kudosNeeded} more kudos to unlock (10 total required)</span>
            </div>
          </div>
          <button 
            className="photo-status-close"
            onClick={() => setShowPhotoStatus(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="chatroom-input">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handlePhotoSelect}
          accept="image/*"
          style={{ display: 'none' }}
          aria-label="Photo upload"
        />
        <button
          type="button"
          className={`chatroom-photo-btn ${photoStatus.canUpload ? 'photo-btn--enabled' : ''}`}
          onClick={handlePhotoButtonClick}
          title={
            photoStatus.canUpload 
              ? `Upload photo (${photoStatus.dailyCount}/${photoStatus.dailyLimit} today)`
              : photoStatus.hasPermission
                ? `Daily photo limit reached (${photoStatus.dailyLimit}/${photoStatus.dailyLimit})`
                : `Need ${photoStatus.kudosNeeded} more kudos`
          }
          aria-label="Attach photo"
        >
          📸
        </button>
        <input
          type="text"
          className="chatroom-input-field"
          placeholder={replyingTo ? `Reply to ${replyingTo.displayName}...` : "Type a message..."}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          maxLength={500}
          aria-label="Message input"
        />
        <button 
          type="submit" 
          className="chatroom-send-btn" 
          disabled={!newMessage.trim() && !photoPreview}
          aria-label="Send message"
        >
          ➤
        </button>
      </form>
    </div>
  )
}
