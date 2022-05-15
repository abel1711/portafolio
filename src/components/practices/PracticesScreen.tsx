import { useSelectLenguaje } from "../../hooks/useSelectLenguaje";
import { useSelectTheme } from "../../hooks/useSelectTheme";
import { Modal } from "../modal/Modal"
import { info, infoEspañol } from "./info";

import './practice.css';

export const PracticesScreen = () => {

  const {theme:{colors}} = useSelectTheme();

  const { lenguaje: { isEnglish, practices } } = useSelectLenguaje();

  const knowledge = (isEnglish)? info : infoEspañol;
  
  return (
    <div 
      className='container'
      style={{
        color: colors.text
      }}
    >
      <div className="animate__animated animate__fadeInLeft">

        <h2>{ practices.title }</h2>

        <p>{ practices.p1 }</p>

        <h4>{ practices.title2 }</h4>
        <ul>
          {
            knowledge.map( ({ id, name }) => (
              <li className='practice-li' key={id} data-bs-toggle="modal" data-bs-target={`#staticBackdrop${id}`}>{name}</li>
            ))
          }
        </ul>
        <p>{ practices.p2 }<a href="https://github.com/abel1711" rel="noreferrer" target={'_blank'}>GitHub page</a></p>
      </div>

      <div>
          {
            knowledge.map( proyect => (
              <Modal key={proyect.id}{...proyect } />
            ))
          }
      </div>
      
    </div>
  )
}
