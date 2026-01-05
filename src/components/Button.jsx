import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    loading && 'button--loading',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <span className="button__spinner" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="button__icon">{icon}</span>
      )}
      <span className="button__text">{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="button__icon">{icon}</span>
      )}
    </button>
  )
}

