import { createContext, useContext, useState, useCallback } from 'react'
import './Toast.css'

const ToastContext = createContext(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random()
    const toast = { id, message, type, duration }
    
    setToasts(prev => [...prev, toast])
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
    
    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const showSuccess = useCallback((message, duration) => {
    return addToast(message, 'success', duration)
  }, [addToast])

  const showError = useCallback((message, duration) => {
    return addToast(message, 'error', duration)
  }, [addToast])

  const showInfo = useCallback((message, duration) => {
    return addToast(message, 'info', duration)
  }, [addToast])

  const showWarning = useCallback((message, duration) => {
    return addToast(message, 'warning', duration)
  }, [addToast])

  return (
    <ToastContext.Provider value={{ 
      addToast, 
      removeToast, 
      showSuccess, 
      showError, 
      showInfo, 
      showWarning 
    }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}

function Toast({ message, type, onClose }) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }

  return (
    <div className={`toast toast--${type}`} role="alert">
      <div className="toast__icon">{icons[type]}</div>
      <div className="toast__message">{message}</div>
      <button 
        className="toast__close" 
        onClick={onClose}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  )
}

