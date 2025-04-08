'use client'
import './profile.css'
import { useAuthContext } from "../context/AuthContext"
import SectionTitle from "../ui/title/SectionTitle"


const Profile = () => {
    const {user} = useAuthContext()
  return (
    <div className='profileMain'>
        <SectionTitle size={26} text={'Tu Perfil'}/>

        <div className="initialProfile">
          <p className="initial">{user.first_name[0]}</p>
        </div>
        <h2>{user.first_name} {user.last_name}</h2>
        
        <h3>{user.email}</h3>
    </div>
  )
}

export default Profile