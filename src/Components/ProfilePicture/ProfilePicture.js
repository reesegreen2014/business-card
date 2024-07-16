import profilePhoto from '../../Images/Profile Photo.jpeg';
import React from 'react';
import './ProfilePicture.css'

function ProfilePicture() {
  return (
    <div className='profile-photo'>
      <img src={profilePhoto} alt="Profile Photo" />
    </div>
  )
}

export default ProfilePicture
