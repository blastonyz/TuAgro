import PhoneIcon from '../ui/icons/Phone'
import { colors } from '../ui/colors'
import FacebookIcon from '../ui/icons/Facebook';
import MailIcon from '../ui/icons/MailIcon';
import InstagramIcon from '../ui/icons/Instagram';
import NavBar from '../navbar/NavBar';
import './header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <header className="mainHeader">
                
                <div className='contactPhone'>
                    <PhoneIcon className={'phoneIcon'} color={colors.yellow} size={'clamp(18px, 4vw, 24px)'}/>
                    <h2 className='contacts'>3875321321</h2>
                </div>
                <div className='contactMail'>

                    <div className='mailIcon'>
                        <MailIcon color={colors.yellow}  />
                    </div>
                    <h2 className='contacts mail'>jorgemoreno@tuagro.com.ar</h2>
                </div>

                <div className='socialsContainer'>
                    <FacebookIcon color={'blue'} size={'clamp(22px, 4vw, 28px)'} />
                    <InstagramIcon size={'clamp(18px, 4vw, 24px)'}/>
                    
                </div>

            </header>
            <NavBar />
        </div>

    )
}

export default Header