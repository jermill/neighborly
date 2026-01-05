import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../components/Toast'
import Button from '../components/Button'
import './Auth.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const { showError } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      await login(email, password)
      navigate('/home')
    } catch (err) {
      showError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🏘️ OurNeighbors</h1>
          <p>Welcome back to your community</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              autoComplete="email"
              aria-label="Email address"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              autoComplete="current-password"
              aria-label="Password"
            />
          </div>

          <Button 
            type="submit" 
            fullWidth 
            loading={loading}
            disabled={loading}
          >
            Log In
          </Button>
        </form>

        <div className="auth-links">
          <Link to="/forgot-password" className="link">Forgot password?</Link>
          <span className="auth-divider">•</span>
          <Link to="/signup" className="link">Create account</Link>
        </div>

        <div className="demo-credentials">
          <p><strong>Demo credentials:</strong></p>
          <p>Email: demo@ourneighbors.app</p>
          <p>Password: demo123</p>
        </div>
      </div>
    </div>
  )
}

