
import { Carousel } from '../carousel/Carousel';
import './about.css';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { useSelectLenguaje } from '../../hooks/useSelectLenguaje';


export const AboutScreen = () => {

  const {theme:{colors, isDark}} = useSelectTheme();
  const { lenguaje:{aboutMe}} = useSelectLenguaje();
  
  return (
      <div 
        className='container'
        style={{
          color: colors.text
        }}
      >

        <div className='row'>

          <div className='col-12 col-md-6 animate__animated animate__fadeInLeft'>
            <h2>{ aboutMe.title } <strong>{ aboutMe.strong }!</strong></h2>
            <p>{ aboutMe.p1 }</p>
            <p>{ aboutMe.p2 }</p>
            <p>{ aboutMe.p3 }</p>
            <h3>{ aboutMe.title2 }</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>Typescript</li>
              <li>Bootstrap</li>
              <li>Jest</li>
              <li>Workbox(PWA)</li>
              <li>GitHub</li>
            </ul>
            <p>{ aboutMe.p4 }</p>
          </div>

          <div 
            className='col-12 col-md-6 container-carousel animate__animated animate__fadeInRight'
            style={{
              backgroundColor: colors.shadowColor,
              border: `1px solid ${isDark ? 'white': '#06193f'}`
            }}
          >
            <Carousel />
          </div>

        </div>

      </div>
  )
}
