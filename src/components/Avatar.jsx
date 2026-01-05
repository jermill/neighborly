import './Avatar.css'

export default function Avatar({
  src = null,
  alt = '',
  initials = '?',
  size = 'md',
  status = null,
  className = ''
}) {
  const classes = [
    'avatar',
    `avatar--${size}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={alt} className="avatar__image" />
      ) : (
        <span className="avatar__initials">{initials}</span>
      )}
      {status && (
        <span className={`avatar__status avatar__status--${status}`} />
      )}
    </div>
  )
}

