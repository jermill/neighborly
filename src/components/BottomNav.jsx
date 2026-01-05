import { Link, useLocation } from 'react-router-dom'
import './BottomNav.css'

export default function BottomNav() {
  const location = useLocation()
  
  const isActive = (path) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname.startsWith('/dashboard/')
    }
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname.startsWith('/room/')
    }
    return location.pathname === path
  }

  const navItems = [
    { path: '/dashboard', label: 'Home', icon: '🏠' },
    { path: '/calendar', label: 'Calendar', icon: '📅' },
    { path: '/profile', label: 'Profile', icon: '👤' }
  ]

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={`bottom-nav__item ${isActive(item.path) ? 'bottom-nav__item--active' : ''}`}
          aria-label={item.label}
          aria-current={isActive(item.path) ? 'page' : undefined}
        >
          <span className="bottom-nav__icon">{item.icon}</span>
          <span className="bottom-nav__label">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

