'use client'
import './profile.css'
import { useAuthContext } from "../context/AuthContext"
import SectionTitle from "../ui/title/SectionTitle"
import VideoSection from '../ui/video/VideoSection'


const Profile = () => {
    const {user} = useAuthContext()
  return (
    <>
      <div className='profileContainer'>
          <SectionTitle size={26} text={'Tu Perfil'}/>
          <div className='dataSection'>
    
            <div className="initialProfile">
              <p className="initial">{user.first_name[0].toUpperCase()}</p>
            </div>
            <div className='userData'>
              <h2>{user.first_name} {user.last_name}</h2>
              
              <h3>{user.email}</h3>
            </div>
  </div>
      </div>
      <VideoSection/>
    </>
  )
}

export default Profile