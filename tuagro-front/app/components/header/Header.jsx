import PhoneIcon from '../ui/icons/Phone';
import { colors } from '../ui/colors';
import Fb from '../ui/icons/Fb';
import Insta from '../ui/icons/Insta';
import Whats from '../ui/icons/Whats';
import MailIcon from '../ui/icons/MailIcon';
import NavBar from '../navbar/NavBar';
import Link from 'next/link';
import './header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <header className="mainHeader">

                <a href={'/contacto.vcf'} download className='contactPhone'>
                    <PhoneIcon className={'phoneIcon'} color={colors.yellow} size={'clamp(18px, 24px, 28px)'} />
                    <h2 className='contacts'>3875800070</h2>

                </a>

                <div className='contactMail'>

                    <div className='mailIcon'>
                        <MailIcon color={colors.yellow} size='36px' />
                    </div>
                    <h2 className='contacts mail'>jorgemoreno@tuagro.com.ar</h2>
                </div>

                <div className='socialsContainer'>
                    <Fb color={'black'} size='18px' />

                    <a
                        href={'https://www.instagram.com/tuagro.com.ar?igsh=bHM3dDl3dGhucTQ4'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Insta color={'black'} size='18px' />
                    </a>

                    <a
                        href="https://wa.me/5493875800070"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Whats color={'black'} size='18px' />
                    </a>
                </div>

            </header>
            <NavBar />
        </div>

    )
}

export default Header