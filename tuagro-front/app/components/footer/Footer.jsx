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
          <img src="/logo-tu-agro-blanco.webp" alt="logo de tu agro blanco" className='logoImage' />
          <div className='iconsSection'>
            <Fb color={colors.green} />
            <a
              href={'https://www.instagram.com/tuagro.com.ar?igsh=bHM3dDl3dGhucTQ4'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Insta color={colors.green} />
            </a>

            <a
              href="https://wa.me/5493875800070"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whats color={colors.green} />
            </a>
          </div>
        </div>

        <div className='contactSection'>

          <h2 className='contactsFootTitle'> Contacto</h2>


          <div className='contactDetails'>
            <div className='contactPhoneFoot'>
              <a href={'/contacto.vcf'} download className='contactPhone'>
                <PhoneIcon className={'phoneIcon'} color={colors.yellow} size={'clamp(18px, 4vw, 24px)'} />
                <h2 className='contactsFoot'>3875800070</h2>
              </a>
            </div>
            <div className='mailIconFoot'>
              <MailIcon color={colors.yellow}
                size={'26px'}
              />
              <h2 className='contactsFoot'>
                jorgemoreno@tuagro.com.ar
              </h2>
            </div>
            <div className='mailIconFoot'>
              <MailIcon color={colors.yellow}
                size={'26px'}
              />  <h2 className='contactsFoot '>info@tuagro.com.ar</h2>
            </div>
          </div>



        </div>

      </div>

    </footer>
  )
}

export default Footer