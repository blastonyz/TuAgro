import './footer.css'
import { colors } from '../ui/colors'
import Fb from '../ui/icons/Fb'
import Insta from '../ui/icons/Insta'
import Whats from '../ui/icons/Whats'
import PhoneIcon from '../ui/icons/Phone'
import MailIcon from '../ui/icons/MailIcon'


const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className='filter'></div>
      <div className='footerSection'>
        <div className='logoSection'>
          <img src="logo-tu-agro-blanco.webp" alt="logo de tu agro blaco" />
          <div className='iconsSection'>
            <Fb color={colors.green} />
            <Insta color={colors.green} />
            <Whats color={colors.green} />
          </div>
        </div>

        <div className='contactSection'>
          <h2 className='contactsFootTitle'> Contacto</h2>
          <div className='contactPhoneFoot'>
            <PhoneIcon className={'phoneIcon'} color={colors.yellow} size={'clamp(18px, 4vw, 24px)'} />
            <h2 className='contactsFoot'>3875321321</h2>
          </div>
          <div className='mailIcon'>
            <MailIcon color={colors.yellow} />
            <h2 className='contactsFoot mail'>
              jorgemoreno@tuagro.com.ar
            </h2>
          </div>

          <div className='mailIcon'>
            <MailIcon color={colors.yellow} />  <h2 className='contactsFoot mail'>info@tuagro.com.ar</h2>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer