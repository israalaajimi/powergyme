import { useState } from 'react'
import { AuthContext } from './authContextDef'

// Simple static admin credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
}

export const AuthProvider = ({ children }) => {
  // Check localStorage right at init instead of in an effect
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('powerGymAdminAuth') === 'true'
  )

  // Login function
  const login = (username, password) => {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true)
      localStorage.setItem('powerGymAdminAuth', 'true')
      return true
    }
    return false
  }

  // Logout function
  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('powerGymAdminAuth')
  }

  const value = {
    isAuthenticated,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
