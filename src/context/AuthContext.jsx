import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

// Mock users database
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@ourneighbors.app',
    password: 'demo123',
    name: 'Sarah Johnson',
    isAnonymous: false,
    displayName: 'Sarah Johnson',
    zipCode: '19103',
    radius: 5
  },
  {
    id: '2',
    email: 'anon@ourneighbors.app',
    password: 'anon123',
    name: 'Mike Chen',
    isAnonymous: true,
    displayName: 'Neighbor847',
    zipCode: '19103',
    radius: 3
  }
]

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check for saved session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('ourneighbors_user')
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const signup = (email, password, name, isAnonymous, zipCode, radius) => {
    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => u.email === email)
    if (existingUser) {
      throw new Error('Email already exists')
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      isAnonymous,
      displayName: isAnonymous ? `Neighbor${Math.floor(Math.random() * 1000)}` : name,
      zipCode: zipCode || '19103',
      radius: radius || 5
    }

    // Add to mock database
    MOCK_USERS.push(newUser)

    // Set current user (without password)
    const { password: _, ...userWithoutPassword } = newUser
    setCurrentUser(userWithoutPassword)
    localStorage.setItem('ourneighbors_user', JSON.stringify(userWithoutPassword))

    return userWithoutPassword
  }

  const login = (email, password) => {
    const user = MOCK_USERS.find(u => u.email === email && u.password === password)
    
    if (!user) {
      throw new Error('Invalid email or password')
    }

    const { password: _, ...userWithoutPassword } = user
    setCurrentUser(userWithoutPassword)
    localStorage.setItem('ourneighbors_user', JSON.stringify(userWithoutPassword))

    return userWithoutPassword
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('ourneighbors_user')
  }

  const updateProfile = (updates) => {
    const updatedUser = {
      ...currentUser,
      ...updates,
      displayName: updates.isAnonymous 
        ? `Neighbor${Math.floor(Math.random() * 1000)}` 
        : updates.name || currentUser.name
    }
    
    setCurrentUser(updatedUser)
    localStorage.setItem('ourneighbors_user', JSON.stringify(updatedUser))

    // Update in mock database
    const userIndex = MOCK_USERS.findIndex(u => u.id === currentUser.id)
    if (userIndex !== -1) {
      MOCK_USERS[userIndex] = { ...MOCK_USERS[userIndex], ...updatedUser }
    }

    return updatedUser
  }

  const deleteAccount = () => {
    const userIndex = MOCK_USERS.findIndex(u => u.id === currentUser.id)
    if (userIndex !== -1) {
      MOCK_USERS.splice(userIndex, 1)
    }
    logout()
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateProfile,
    deleteAccount,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

