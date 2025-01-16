import PhoneIcon from '../ui/icons/Phone'
import { colors } from '../ui/colors'
import './header.css'

const Header = () => {
  return (
    <header className="mainHeader">
        <div className='contactPhone'>
            <PhoneIcon className= {'phoneIcon'} color={colors.yellow} />
            <h2>3875321321</h2>
        </div>
        <div className='contactPhone'>
            <PhoneIcon className= {'phoneIcon'} color={colors.yellow} />
            <h2>3875321321</h2>
        </div>
    </header>
  )
}

export  default Header