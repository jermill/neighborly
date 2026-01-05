import './EmptyState.css'
import Button from './Button'

export default function EmptyState({
  icon = '📭',
  title = 'Nothing here yet',
  description = '',
  action = null,
  actionLabel = '',
  onAction = null
}) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>
      <h3 className="empty-state__title">{title}</h3>
      {description && (
        <p className="empty-state__description">{description}</p>
      )}
      {action || (onAction && actionLabel) ? (
        <div className="empty-state__action">
          {action || (
            <Button onClick={onAction}>{actionLabel}</Button>
          )}
        </div>
      ) : null}
    </div>
  )
}

