import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  getUserProfile,
  getUserKudos,
  getUserBadges,
  isNeighborBond,
  sendBondRequest,
  getNeighborBonds,
  getUserEvents
} from '../data/mockData'
import './UserProfile.css'

export default function UserProfile() {
  const { userId } = useParams()
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [badges, setBadges] = useState([])
  const [isBond, setIsBond] = useState(false)
  const [userEvents, setUserEvents] = useState([])
  const [showBondMessage, setShowBondMessage] = useState(false)
  const [bondMessage, setBondMessage] = useState('')

  useEffect(() => {
    const userProfile = getUserProfile(userId)
    if (!userProfile) {
      navigate('/home')
      return
    }

    setProfile(userProfile)
    setBadges(getUserBadges(userId))
    setIsBond(isNeighborBond(currentUser.id, userId))
    setUserEvents(getUserEvents(userId).filter(e => e.datetime > Date.now()).slice(0, 3))
  }, [userId, currentUser.id, navigate])

  const handleSendBondRequest = () => {
    if (!bondMessage.trim()) {
      alert('Please add a message to your bond request')
      return
    }

    const result = sendBondRequest(
      currentUser.id,
      userId,
      bondMessage,
      profile.activeRooms[0] || 'home'
    )

    if (result.success) {
      alert(result.message)
      setShowBondMessage(false)
      setBondMessage('')
    } else {
      alert(result.message)
    }
  }

  if (!profile) return null

  const isOwnProfile = userId === currentUser.id
  const totalKudos = Object.values(profile.activeRooms || []).reduce((sum, roomId) => {
    return sum + (getUserKudos(userId, roomId) || 0)
  }, profile.totalKudos || 0)

  return (
    <div className="profile-container">
      <header className="profile-header">
        <Link to="/home" className="back-button">
          ← Back
        </Link>
      </header>

      <div className="profile-card">
        {/* Profile Photo */}
        <div className="profile-photo-section">
          <div className="profile-photo">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.displayName} />
            ) : (
              <div className="profile-photo-placeholder">
                {profile.displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">
            {isBond && profile.privacy.showRealName ? profile.fullName : profile.displayName}
          </h1>
          
          {!profile.isAnonymous && profile.privacy.showRealName && (
            <p className="profile-username">@{profile.displayName.toLowerCase().replace(/\s+/g, '')}</p>
          )}

          {profile.bio && (
            <p className="profile-bio">{profile.bio}</p>
          )}

          {/* Stats */}
          <div className="profile-stats">
            <div className="stat">
              <div className="stat-value">⭐ {totalKudos}</div>
              <div className="stat-label">Total Kudos</div>
            </div>
            <div className="stat">
              <div className="stat-value">{getNeighborBonds(userId).length}</div>
              <div className="stat-label">Neighbor Bonds</div>
            </div>
            <div className="stat">
              <div className="stat-value">{profile.activeRooms?.length || 0}</div>
              <div className="stat-label">Active Rooms</div>
            </div>
          </div>

          {/* Badges */}
          {badges.length > 0 && (
            <div className="profile-badges">
              <h3>Badges</h3>
              <div className="badges-grid">
                {badges.map((badge) => (
                  <div key={badge.id} className="badge-item" title={badge.description}>
                    <span className="badge-icon">{badge.icon}</span>
                    <span className="badge-name">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Rooms */}
          {profile.privacy.showActiveRooms && profile.activeRooms && profile.activeRooms.length > 0 && (
            <div className="profile-rooms">
              <h3>Active In</h3>
              <div className="rooms-list">
                {profile.activeRooms.slice(0, 5).map((roomId) => (
                  <span key={roomId} className="room-tag">
                    {roomId.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Events */}
          {userEvents.length > 0 && (
            <div className="profile-events">
              <h3>Upcoming Events</h3>
              <div className="events-list">
                {userEvents.map((event) => (
                  <div key={event.eventId} className="event-item-mini">
                    <span className="event-title-mini">{event.title}</span>
                    <span className="event-date-mini">
                      {new Date(event.datetime).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          {!isOwnProfile && (
            <div className="profile-actions">
              {isBond ? (
                <>
                  <div className="bond-status">
                    <span className="bond-icon">🤝</span>
                    You are Neighbor Bonds
                  </div>
                  <Link to={`/messages/${userId}`} className="btn btn-primary">
                    Send Message
                  </Link>
                </>
              ) : (
                <>
                  {!showBondMessage ? (
                    <button 
                      className="btn btn-primary"
                      onClick={() => setShowBondMessage(true)}
                    >
                      🤝 Send Neighbor Bond Request
                    </button>
                  ) : (
                    <div className="bond-request-form">
                      <textarea
                        className="bond-message-input"
                        placeholder="Why would you like to connect? (e.g., 'Love to coordinate for the next game night!')"
                        value={bondMessage}
                        onChange={(e) => setBondMessage(e.target.value)}
                        maxLength={200}
                        rows={3}
                      />
                      <div className="bond-form-actions">
                        <button 
                          className="btn btn-secondary"
                          onClick={() => {
                            setShowBondMessage(false)
                            setBondMessage('')
                          }}
                        >
                          Cancel
                        </button>
                        <button 
                          className="btn btn-primary"
                          onClick={handleSendBondRequest}
                        >
                          Send Request
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {isOwnProfile && (
            <div className="profile-actions">
              <Link to="/profile" className="btn btn-primary">
                Edit Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

