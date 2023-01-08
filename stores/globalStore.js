import React, { useState, createContext, useContext } from 'react'

export const UserDataContext = createContext()

export function useUserData() {
  const context = useContext(UserDataContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState([])

  return (
    <UserDataContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserDataContext.Provider>
  )
}
