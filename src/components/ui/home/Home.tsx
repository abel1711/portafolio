import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import profileImg from '../../../images/profile-abel.jpg';
import { ArrowDownIcon } from '../../icons/ArrowDownIcon';
import { useSelectTheme } from '../../../hooks/useSelectTheme';

import './home.css';
import { useSelectLenguaje } from '../../../hooks/useSelectLenguaje';
import { SwitchConfig } from '../../switchConfig/SwitchConfig';

 export const Home = () => {

  const [picLoaded, setPicLoaded] = useState(false);

  const {lenguaje:{home}} = useSelectLenguaje();

  const navigate = useNavigate();

  const { theme:{colors} } = useSelectTheme();

  
  

  const handleClick = ()=>{
    navigate('about')
  }

  

   return (
     <div className='home-container' >
       <div 
        className={`profile-container ${picLoaded ? '':'hide'} ` }
        style={{
          backgroundColor: colors.shadowColor
        }}
      >

        <img
                className="profile hover-animation"
                alt="a.amieva profile"
                src={profileImg}
                onLoad={() => setPicLoaded(true)}
        />

          <h1 style={{
            color: colors.text
          }}>
              <Typewriter
                  options={{
                      strings: home,
                      autoStart: true,
                      loop: true,
                      cursor: '<',
                      deleteSpeed: 1,
                      cursorClassName: 'cursor',
                      delay: 100,
                      
                  }}
          /></h1>
          <span className="wave-emoji" role="img" aria-label="waving hand">
                  👋
          </span>
       </div>
       
        <Button 
          className='btn-init' 
          auto
          light
          css={{
            color: colors.text
          }}
          icon={<ArrowDownIcon size={30} filled/>}
          onPress={ handleClick }
          size='sm'
        >  
        </Button>
      <div className='container-switch-theme'>
      <SwitchConfig />
      </div>
      <div>
     
    </div>
     </div>
   )
 };

 export default Home;
 