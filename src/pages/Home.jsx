import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ROOMS, getUnreadCount } from '../data/mockData'
import Avatar from '../components/Avatar'
import './Home.css'

export default function Home() {
  const { currentUser } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  // Filter rooms based on search
  const filteredRooms = ROOMS.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-header-top">
          <div>
            <h1 className="home-title">🏘️ OurNeighbors</h1>
            <p className="home-subtitle">
              {currentUser?.zipCode 
                ? `${currentUser.zipCode}` 
                : 'Your community'}
            </p>
          </div>
          <Link to="/profile" className="home-avatar-link" aria-label="Profile">
            <Avatar 
              initials={currentUser?.displayName?.[0] || '?'}
              size="lg"
            />
          </Link>
        </div>

        <div className="home-search">
          <input
            type="search"
            className="home-search-input"
            placeholder="Search rooms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search rooms"
          />
        </div>
      </header>

      <main className="home-main">
        {filteredRooms.length === 0 ? (
          <div className="home-no-results">
            <p>No rooms found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="home-rooms-grid">
            {filteredRooms.map((room, index) => {
              const unreadCount = getUnreadCount(room.id)
              return (
                <Link
                  key={room.id}
                  to={`/room/${room.id}`}
                  className="room-card"
                  style={{ 
                    '--card-color': room.color,
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <div className="room-card-header">
                    <div className="room-card-emoji">{room.emoji}</div>
                    {unreadCount > 0 && (
                      <div className="room-card-badge">{unreadCount}</div>
                    )}
                  </div>
                  <h3 className="room-card-title">{room.name}</h3>
                  <p className="room-card-description">{room.description}</p>
                  {room.groups && (
                    <div className="room-card-footer">
                      <span className="room-card-groups">
                        {room.groups.length} groups
                      </span>
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

