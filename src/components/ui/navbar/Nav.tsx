import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import './navbar.css';
import { useSelectTheme } from '../../../hooks/useSelectTheme';
import { SwitchConfig } from '../../switchConfig/SwitchConfig';
import { useSelectLenguaje } from '../../../hooks/useSelectLenguaje';

export const Navbar = () => {

  const [show, setShow] = useState(false);

  const {theme:{colors}} = useSelectTheme();

  const { lenguaje:{navbar}} = useSelectLenguaje();
  const handleClick=()=>{
    setShow(!show);
  }
  return (
      <div>
        <nav 
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            backgroundColor: colors.shadowColor
          }}
        >
          <div className="container-fluid"  >
            <button className="navbar-toggler" type="button"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <SwitchConfig />
            <div className={`collapse navbar-collapse navbar-items ${show ? 'show': ''}`} id="navbarNav" onClick={handleClick}>
              <ul className="navbar-nav" >
                <NavLink to={''} className={ ({isActive})=>{ return `nav-item ${isActive ? 'active': ''}`}}>
                  {navbar.link1}
                </NavLink>
                <NavLink to={'about'} className={ ({isActive})=>{ return `nav-item ${isActive ? 'active': ''}`}}>
                {navbar.link2}
                </NavLink>
                <NavLink to={'practices'} className={ ({isActive})=>{ return `nav-item ${isActive ? 'active': ''}`}}>
                {navbar.link3}
                </NavLink>
                <NavLink to={'contact'} className={ ({isActive})=>{ return `nav-item ${isActive ? 'active': ''}`}}>
                {navbar.link4}
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )}
    
    export default Navbar