import PhoneIcon from '../ui/icons/Phone';
import { colors } from '../ui/colors';
import Fb from '../ui/icons/Fb';
import Insta from '../ui/icons/Insta';
import Whats from '../ui/icons/Whats';
import MailIcon from '../ui/icons/MailIcon';
import NavBar from '../navbar/NavBar';
import './header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <header className="mainHeader">

                <div className='contactPhone'>
                    <PhoneIcon className={'phoneIcon'} color={colors.yellow} size={'clamp(18px, 24px, 28px)'} />
                    <h2 className='contacts'>3875321321</h2>
                </div>
                <div className='contactMail'>

                    <div className='mailIcon'>
                        <MailIcon color={colors.yellow} size='36px'/>
                    </div>
                    <h2 className='contacts mail'>jorgemoreno@tuagro.com.ar</h2>
                </div>

                <div className='socialsContainer'>
                    <Fb color={'black'} size='18px'/>
                    <Insta color={'black'} size='18px'/>
                    <Whats color={'black'} size='18px'/>

                </div>

            </header>
            <NavBar />
        </div>

    )
}

export default Header