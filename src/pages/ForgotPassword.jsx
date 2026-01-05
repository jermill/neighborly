import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setMessage('')
      setLoading(true)
      
      // Mock password reset
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Password reset link sent! Check your email.')
      setEmail('')
    } catch (err) {
      setMessage('Failed to send reset link. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🏘️ OurNeighbors</h1>
          <p>Reset your password</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {message && (
            <div className={message.includes('sent') ? 'success-message' : 'error-message'}>
              {message}
            </div>
          )}

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
            />
          </div>

          <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login" className="link">Back to login</Link>
        </div>
      </div>
    </div>
  )
}

