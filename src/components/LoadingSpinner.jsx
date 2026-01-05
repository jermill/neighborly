import './LoadingSpinner.css'

export default function LoadingSpinner({ size = 'md', className = '', fullScreen = false }) {
  if (fullScreen) {
    return (
      <div className="loading-spinner-fullscreen">
        <div className={`loading-spinner loading-spinner--${size} ${className}`} />
      </div>
    )
  }

  return <div className={`loading-spinner loading-spinner--${size} ${className}`} />
}

