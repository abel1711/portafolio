import { useSelectTheme } from '../../hooks/useSelectTheme';
import { logoGmail, logoLinkedin, logoWhatsapp, logoGitHub } from '../../images';
import './contact.css';
import { useState } from 'react';
import { ModalEmail } from '../modal/ModalEmail';


export const ContactScreen = () => {

  const { theme:{isDark}} = useSelectTheme();
  const [openModal, setOpenModal] = useState(false)
  const handleModal=()=>{
    setOpenModal(true)
  }
  return (
    <div className='container'>
      <div className="row container-contact">

        <div className='col-12 col-md-6 col-lg-3  animate__animated animate__fadeInLeft'>
          <a href="https://github.com/abel1711" target={'_blank'} rel="noreferrer" className='container-img-contact'>
            <img src={logoGitHub} 
              alt="github" 
              className='hover-animation img-contact' 
              style={{
                backgroundColor: (isDark)?'white': '',
                borderRadius: '15px'
              }} />
          </a>
        </div>

        <div className='col-12 col-md-6 col-lg-3 container-img-contact animate__animated animate__fadeInUp'>
            <img src={logoGmail} alt="github" className='hover-animation img-contact' onClick={handleModal} />
        </div>

        <div className='col-12 col-md-6 col-lg-3 animate__animated animate__fadeInDown'>
          <a href="https://www.linkedin.com/in/abel-aron-amieva-876416215/" target={'_blank'} rel="noreferrer" className='container-img-contact'>
            <img src={logoLinkedin} alt="github" className='hover-animation img-contact' />
          </a>
        </div>

        <div className='col-12 col-md-6 col-lg-3 animate__animated animate__fadeInRight'>
          <a href="https://bit.ly/3le8dC7" target={'_blank'} rel="noreferrer" className='container-img-contact'>
            <img src={logoWhatsapp} alt="github" className='hover-animation img-contact' />
          </a>
        </div>

      </div>
              <ModalEmail open={openModal} onClose={ setOpenModal }/>
    </div>
  )
}
