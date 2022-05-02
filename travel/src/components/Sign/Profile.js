import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div className='welcome'>
       <br></br>
        <h1>Welcome back, {user.name}!</h1>
      </div>
    )
  )
}

export default Profile