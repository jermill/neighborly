import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ROOMS, getUnreadCount } from '../data/mockData'
import Avatar from '../components/Avatar'
import ThemeToggle from '../components/ThemeToggle'
import ChatRoom from './ChatRoom'
import './Dashboard.css'

export default function Dashboard() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRoomId, setSelectedRoomId] = useState(roomId || null)

  useEffect(() => {
    if (roomId) {
      setSelectedRoomId(roomId)
    }
  }, [roomId])

  const filteredRooms = ROOMS.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleRoomSelect = (roomId) => {
    setSelectedRoomId(roomId)
    navigate(`/dashboard/${roomId}`)
  }

  return (
    <div className={`dashboard ${selectedRoomId ? 'has-selection' : ''}`}>
      {/* Left Sidebar - Room List */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-header">
          <div className="sidebar-header-content">
            <h1 className="sidebar-title">🏘️ OurNeighbors</h1>
            <p className="sidebar-subtitle">{currentUser?.zipCode}</p>
          </div>
          <div className="sidebar-header-actions">
            <ThemeToggle />
            <button
              onClick={() => navigate('/profile')}
              className="sidebar-avatar-btn"
              aria-label="View profile"
            >
              <Avatar 
                initials={currentUser?.displayName?.[0] || '?'}
                size="md"
              />
            </button>
          </div>
        </div>

        <div className="sidebar-search">
          <input
            type="search"
            className="sidebar-search-input"
            placeholder="Search rooms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search rooms"
          />
        </div>

        <div className="sidebar-rooms">
          {filteredRooms.map((room) => {
            const unreadCount = getUnreadCount(room.id)
            const isActive = selectedRoomId === room.id
            
            return (
              <button
                key={room.id}
                className={`room-item ${isActive ? 'room-item--active' : ''}`}
                onClick={() => handleRoomSelect(room.id)}
                style={{ '--room-color': room.color }}
              >
                <div className="room-item-icon" style={{ backgroundColor: room.color }}>
                  {room.emoji}
                </div>
                <div className="room-item-content">
                  <h3 className="room-item-name">{room.name}</h3>
                  <p className="room-item-desc">{room.description}</p>
                  {room.groups && (
                    <span className="room-item-groups">
                      {room.groups.length} groups
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <div className="room-item-badge">{unreadCount}</div>
                )}
              </button>
            )
          })}
        </div>

        <div className="sidebar-footer">
          <button 
            className="sidebar-footer-btn"
            onClick={() => navigate('/calendar')}
          >
            📅 Calendar
          </button>
        </div>
      </aside>

      {/* Main Content - Chat Room */}
      <main className="dashboard-main">
        {selectedRoomId ? (
          <ChatRoom embedded roomId={selectedRoomId} />
        ) : (
          <div className="dashboard-empty">
            <div className="dashboard-empty-icon">💬</div>
            <h2>Select a room to start chatting</h2>
            <p>Choose a room from the sidebar to join the conversation</p>
          </div>
        )}
      </main>
    </div>
  )
}

