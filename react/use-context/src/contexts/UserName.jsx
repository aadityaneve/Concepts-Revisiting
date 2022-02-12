import React, {createContext, useState} from 'react'

export const UserNameContext = createContext()

const UserNameProvider = ({children}) => {

  const [userName, setUserName] = useState('Aditya Neve');

  const handleUserName = (value) => {
    setUserName(value);
  }

  return (
    <UserNameContext.Provider value={{userName, handleUserName}}>
      {children}
    </UserNameContext.Provider>
  )
}

export default UserNameProvider