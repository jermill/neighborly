import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../components/Toast'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import { ROOMS, getUserKudos, getUserEvents, getPendingBondRequests, getNeighborBonds } from '../data/mockData'
import './Profile.css'

export default function Profile() {
  const { currentUser, updateProfile, deleteAccount, logout } = useAuth()
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [stats, setStats] = useState({
    totalKudos: 0,
    eventsCreated: 0,
    eventsAttended: 0,
    bonds: 0
  })
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    isAnonymous: currentUser?.isAnonymous || false
  })

  useEffect(() => {
    calculateStats()
  }, [currentUser])

  const calculateStats = () => {
    // Calculate total kudos across all rooms
    let totalKudos = 0
    ROOMS.forEach(room => {
      totalKudos += getUserKudos(currentUser.id, room.id)
    })

    // Get user events
    const userEvents = getUserEvents(currentUser.id)
    const now = Date.now()
    const eventsCreated = userEvents.filter(e => e.createdBy === currentUser.id).length
    const eventsAttended = userEvents.filter(e => 
      e.rsvps.some(r => r.userId === currentUser.id && r.status === 'going') && 
      e.datetime < now
    ).length

    // Get bonds
    const bonds = getNeighborBonds(currentUser.id).length

    setStats({
      totalKudos,
      eventsCreated,
      eventsAttended,
      bonds
    })
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    try {
      updateProfile(formData)
      showSuccess('Profile updated successfully!')
      setIsEditing(false)
    } catch (error) {
      showError('Failed to update profile')
    }
  }

  const handleDeleteAccount = () => {
    deleteAccount()
    navigate('/login')
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getAchievements = () => {
    const achievements = []
    
    if (stats.totalKudos >= 50) achievements.push({ icon: '🌟', title: 'Super Neighbor', desc: '50+ kudos' })
    if (stats.totalKudos >= 20) achievements.push({ icon: '⭐', title: 'Event Creator', desc: 'Can create events' })
    if (stats.bonds >= 5) achievements.push({ icon: '🤝', title: 'Social Butterfly', desc: '5+ bonds' })
    if (stats.eventsCreated >= 3) achievements.push({ icon: '🎉', title: 'Event Host', desc: '3+ events created' })
    if (stats.eventsAttended >= 5) achievements.push({ icon: '🎪', title: 'Active Participant', desc: '5+ events attended' })
    
    return achievements
  }

  const achievements = getAchievements()

  return (
    <div className="profile-page">
      <header className="profile-header">
        <button onClick={() => navigate('/home')} className="profile-back-btn" aria-label="Back to home">
          ←
        </button>
        <h1 className="profile-header-title">Profile</h1>
      </header>

      <main className="profile-main">
        <div className="profile-hero">
          <Avatar 
            initials={currentUser?.displayName?.[0] || '?'}
            size="2xl"
          />
          <h2 className="profile-name">{currentUser?.displayName}</h2>
          {currentUser?.isAnonymous && (
            <span className="profile-anonymous-badge">Anonymous User</span>
          )}
        </div>

        <div className="profile-stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-value">{stats.totalKudos}</div>
            <div className="stat-label">Total Kudos</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎉</div>
            <div className="stat-value">{stats.eventsCreated}</div>
            <div className="stat-label">Events Created</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎪</div>
            <div className="stat-value">{stats.eventsAttended}</div>
            <div className="stat-label">Events Attended</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🤝</div>
            <div className="stat-value">{stats.bonds}</div>
            <div className="stat-label">Bonds</div>
          </div>
        </div>

        {achievements.length > 0 && (
          <div className="profile-section">
            <h3 className="section-title">🏆 Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-info">
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-desc">{achievement.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="profile-section">
          <div className="section-header">
            <h3 className="section-title">Account Info</h3>
            {!isEditing && (
              <Button 
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            )}
          </div>

          {!isEditing ? (
            <div className="profile-info-card">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">{currentUser?.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{currentUser?.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">ZIP Code</span>
                <span className="info-value">{currentUser?.zipCode || 'Not set'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Neighborhood Radius</span>
                <span className="info-value">{currentUser?.radius} miles</span>
              </div>
              <div className="info-item">
                <span className="info-label">Anonymous Mode</span>
                <span className="info-value">
                  {currentUser?.isAnonymous ? (
                    <span className="status-badge status-badge--active">Enabled</span>
                  ) : (
                    <span className="status-badge">Disabled</span>
                  )}
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="profile-edit-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    name="isAnonymous"
                    checked={formData.isAnonymous}
                    onChange={handleChange}
                  />
                  <span>Use anonymous display name</span>
                </label>
                <p className="form-help">
                  Note: Changing this only affects future messages
                </p>
              </div>

              <div className="form-actions">
                <Button type="submit" variant="primary">
                  Save Changes
                </Button>
                <Button 
                  type="button" 
                  variant="secondary"
                  onClick={() => {
                    setIsEditing(false)
                    setFormData({
                      name: currentUser?.name || '',
                      isAnonymous: currentUser?.isAnonymous || false
                    })
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="profile-section">
          <h3 className="section-title">Actions</h3>
          <div className="profile-actions">
            <Button 
              variant="secondary"
              fullWidth
              onClick={handleLogout}
            >
              Log Out
            </Button>
            <Button 
              variant="danger"
              fullWidth
              onClick={handleDeleteAccount}
            >
              Delete Account
            </Button>
          </div>
        </div>

        <div className="profile-footer">
          <Link to="/guidelines" className="profile-footer-link">
            Community Guidelines
          </Link>
        </div>
      </main>
    </div>
  )
}
