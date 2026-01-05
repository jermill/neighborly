import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../components/Toast'
import Button from '../components/Button'
import EmptyState from '../components/EmptyState'
import { 
  getAllEvents, 
  rsvpToEvent, 
  createEvent, 
  getUserKudos,
  ROOMS,
  getUserEvents
} from '../data/mockData'
import './Calendar.css'

export default function Calendar() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()
  const [events, setEvents] = useState([])
  const [filterRoom, setFilterRoom] = useState('all')
  const [showMyEventsOnly, setShowMyEventsOnly] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [userTotalKudos, setUserTotalKudos] = useState(0)
  const [userActiveEvents, setUserActiveEvents] = useState(0)
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    roomId: 'new-neighbors',
    title: '',
    description: '',
    location: '',
    datetime: '',
    duration: '',
    maxAttendees: ''
  })

  useEffect(() => {
    loadEvents()
    calculateUserKudos()
    countUserActiveEvents()
  }, [filterRoom, showMyEventsOnly, currentUser.id])

  const loadEvents = () => {
    let allEvents = getAllEvents()
    
    if (filterRoom !== 'all') {
      allEvents = allEvents.filter(e => e.roomId === filterRoom)
    }
    
    if (showMyEventsOnly) {
      allEvents = allEvents.filter(e => 
        e.createdBy === currentUser.id || 
        e.rsvps.some(r => r.userId === currentUser.id)
      )
    }
    
    const now = Date.now()
    allEvents = allEvents.filter(e => e.datetime > now)
    allEvents.sort((a, b) => a.datetime - b.datetime)
    
    setEvents(allEvents)
  }

  const calculateUserKudos = () => {
    let total = 0
    ROOMS.forEach(room => {
      total += getUserKudos(currentUser.id, room.id)
    })
    setUserTotalKudos(total)
  }

  const countUserActiveEvents = () => {
    const userEvents = getUserEvents(currentUser.id)
    const now = Date.now()
    const upcoming = userEvents.filter(e => 
      e.createdBy === currentUser.id && e.datetime > now
    )
    setUserActiveEvents(upcoming.length)
  }

  const handleRSVP = (eventId, status) => {
    rsvpToEvent(eventId, currentUser.id, currentUser.displayName, status)
    if (status === 'pass') {
      showSuccess('RSVP cancelled')
    } else {
      showSuccess(`You're ${status}!`)
    }
    loadEvents()
  }

  const handleCreateEvent = (e) => {
    e.preventDefault()
    setLoading(true)
    
    if (userTotalKudos < 20) {
      showError('You need at least 20 total kudos to create events. Keep being a good neighbor!')
      setLoading(false)
      return
    }
    
    if (userActiveEvents >= 3) {
      showError('You can only have 3 active upcoming events at a time.')
      setLoading(false)
      return
    }
    
    if (!formData.title || !formData.location || !formData.datetime) {
      showError('Please fill in all required fields')
      setLoading(false)
      return
    }
    
    const result = createEvent({
      roomId: formData.roomId,
      createdBy: currentUser.id,
      creatorName: currentUser.displayName,
      title: formData.title,
      description: formData.description,
      location: formData.location,
      datetime: new Date(formData.datetime).getTime(),
      duration: formData.duration || '2 hours',
      maxAttendees: formData.maxAttendees ? parseInt(formData.maxAttendees) : null,
      isPublic: true,
      category: 'community',
      tags: []
    })
    
    if (result.success) {
      showSuccess('Event created! 🎉')
      setShowCreateModal(false)
      setFormData({
        roomId: 'new-neighbors',
        title: '',
        description: '',
        location: '',
        datetime: '',
        duration: '',
        maxAttendees: ''
      })
      loadEvents()
      countUserActiveEvents()
    }
    
    setLoading(false)
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return {
      dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate(),
      time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      fullDate: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    }
  }

  const getUserRSVP = (event) => {
    return event.rsvps.find(r => r.userId === currentUser.id)
  }

  const getRoomInfo = (roomId) => {
    return ROOMS.find(r => r.id === roomId)
  }

  const canCreateEvent = userTotalKudos >= 20 && userActiveEvents < 3

  return (
    <div className="calendar-page">
      <header className="calendar-header">
        <button onClick={() => navigate('/home')} className="calendar-back-btn" aria-label="Back to home">
          ←
        </button>
        <div className="calendar-header-info">
          <h1 className="calendar-title">📅 Neighborhood Calendar</h1>
          <p className="calendar-subtitle">Upcoming community events</p>
        </div>
      </header>

      <div className="calendar-toolbar">
        <div className="calendar-filters">
          <select 
            value={filterRoom} 
            onChange={(e) => setFilterRoom(e.target.value)}
            className="calendar-filter-select"
            aria-label="Filter by room"
          >
            <option value="all">All Rooms</option>
            {ROOMS.map(room => (
              <option key={room.id} value={room.id}>
                {room.emoji} {room.name}
              </option>
            ))}
          </select>

          <label className="calendar-checkbox">
            <input
              type="checkbox"
              checked={showMyEventsOnly}
              onChange={(e) => setShowMyEventsOnly(e.target.checked)}
            />
            <span>My Events Only</span>
          </label>
        </div>

        {canCreateEvent ? (
          <Button 
            onClick={() => setShowCreateModal(true)}
            icon="+"
          >
            Create Event
          </Button>
        ) : (
          <Button 
            disabled
            title={`Need 20 kudos (you have ${userTotalKudos}) and max 3 active events (you have ${userActiveEvents})`}
          >
            🔒 Create Event
          </Button>
        )}
      </div>

      <main className="calendar-main">
        <div className="calendar-count">
          <span>{events.length} upcoming {events.length === 1 ? 'event' : 'events'}</span>
        </div>

        {events.length === 0 ? (
          <EmptyState 
            icon="🗓️"
            title="No events found"
            description={showMyEventsOnly ? "You haven't RSVP'd to any events yet" : "Be the first to create an event!"}
            {...(canCreateEvent && !showMyEventsOnly ? {
              actionLabel: "Create Event",
              onAction: () => setShowCreateModal(true)
            } : {})}
          />
        ) : (
          <div className="calendar-events-grid">
            {events.map(event => {
              const dateInfo = formatDate(event.datetime)
              const room = getRoomInfo(event.roomId)
              const userRSVP = getUserRSVP(event)
              const goingCount = event.rsvps.filter(r => r.status === 'going').length
              const maybeCount = event.rsvps.filter(r => r.status === 'maybe').length
              
              return (
                <div key={event.eventId} className="event-card">
                  <div className="event-card-header">
                    <div className="event-date-badge">
                      <div className="event-date-day">{dateInfo.day}</div>
                      <div className="event-date-month">{dateInfo.month}</div>
                    </div>
                    <div className="event-header-info">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-meta">
                        <span className="event-room-badge" style={{ background: room?.color + '20', color: room?.color }}>
                          {room?.emoji} {room?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="event-card-body">
                    {event.description && (
                      <p className="event-description">{event.description}</p>
                    )}
                    
                    <div className="event-info-row">
                      <span className="event-info-item">
                        🕒 {dateInfo.time}
                        {event.duration && ` · ${event.duration}`}
                      </span>
                    </div>
                    
                    <div className="event-info-row">
                      <span className="event-info-item">
                        📍 {event.location}
                      </span>
                    </div>
                    
                    <div className="event-info-row">
                      <span className="event-info-item">
                        👤 Hosted by {event.creatorName}
                      </span>
                    </div>
                    
                    <div className="event-rsvp-counts">
                      {goingCount > 0 && (
                        <span className="rsvp-count rsvp-count--going">
                          ✓ {goingCount} going
                        </span>
                      )}
                      {maybeCount > 0 && (
                        <span className="rsvp-count rsvp-count--maybe">
                          ? {maybeCount} maybe
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="event-card-footer">
                    {userRSVP ? (
                      <>
                        <span className="user-rsvp-badge">
                          ✓ You're {userRSVP.status === 'going' ? 'Going' : 'Maybe'}
                        </span>
                        <Button 
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRSVP(event.eventId, 'pass')}
                        >
                          Cancel RSVP
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          variant="primary"
                          size="sm"
                          onClick={() => handleRSVP(event.eventId, 'going')}
                        >
                          Going
                        </Button>
                        <Button 
                          variant="secondary"
                          size="sm"
                          onClick={() => handleRSVP(event.eventId, 'maybe')}
                        >
                          Maybe
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      {showCreateModal && (
        <div className="calendar-modal-overlay" onClick={() => !loading && setShowCreateModal(false)}>
          <div className="calendar-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New Event</h2>
              <button 
                className="modal-close-btn" 
                onClick={() => setShowCreateModal(false)}
                disabled={loading}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleCreateEvent} className="event-form">
              <div className="form-group">
                <label className="form-label">Room *</label>
                <select
                  className="form-select"
                  value={formData.roomId}
                  onChange={(e) => setFormData({...formData, roomId: e.target.value})}
                  required
                >
                  {ROOMS.map(room => (
                    <option key={room.id} value={room.id}>
                      {room.emoji} {room.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Event Title *</label>
                <input
                  className="form-input"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Saturday Game Night"
                  maxLength="60"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Bring your favorite board game! All skill levels welcome."
                  maxLength="300"
                  rows="3"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Date & Time *</label>
                  <input
                    className="form-input"
                    type="datetime-local"
                    value={formData.datetime}
                    onChange={(e) => setFormData({...formData, datetime: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Duration</label>
                  <input
                    className="form-input"
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    placeholder="2 hours"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Location *</label>
                <input
                  className="form-input"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Miller Park Pavilion"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Max Attendees (optional)</label>
                <input
                  className="form-input"
                  type="number"
                  value={formData.maxAttendees}
                  onChange={(e) => setFormData({...formData, maxAttendees: e.target.value})}
                  placeholder="Leave empty for unlimited"
                  min="2"
                />
              </div>

              <Button 
                type="submit" 
                fullWidth
                loading={loading}
                disabled={loading}
              >
                Create Event
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
