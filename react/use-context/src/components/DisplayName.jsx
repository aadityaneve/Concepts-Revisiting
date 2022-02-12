import React, {useContext,} from 'react'
import {UserNameContext} from '../contexts/UserName'

const DisplayName = () => {

    const { userName, handleUserName} = useContext(UserNameContext)

  return (
    <div>
        <h1>{userName}</h1>
    </div>
  )
}

export default DisplayName