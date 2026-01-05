import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './components/Toast'
import BottomNav from './components/BottomNav'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ChatRoom from './pages/ChatRoom'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile'
import Guidelines from './pages/Guidelines'
import Calendar from './pages/Calendar'
import './App.css'

function PrivateRoute({ children }) {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to="/login" />
}

function AppContent() {
  const location = useLocation()
  const { currentUser } = useAuth()
  
  // Show bottom nav only on authenticated pages (but not on dashboard since it has its own nav)
  const showBottomNav = currentUser && 
    !['/login', '/signup', '/forgot-password', '/guidelines'].includes(location.pathname) &&
    !location.pathname.startsWith('/dashboard')
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/:roomId?"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/room/:roomId"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          }
        />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </>
  )
}

function PublicRoute({ children }) {
  const { currentUser } = useAuth()
  return !currentUser ? children : <Navigate to="/home" />
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <ToastProvider>
            <div className="app">
              <AppContent />
            </div>
          </ToastProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App



