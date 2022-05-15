import { Switch } from "@nextui-org/react";
import { useSelectLenguaje } from "../../hooks/useSelectLenguaje";
import { EN } from "../icons/EN";
import { ES } from "../icons/ES";
// import { MoonIcon } from "../icons/MoonIcon";
// import { SunIcon } from "../icons/SunIcon";


export const SwitchLenguaje = () => {
    
    const { changeLenguaje, lenguaje } = useSelectLenguaje();
      
  return (
        <Switch
        checked={ lenguaje.isEnglish }
        squared
        size={'md'}
        color='primary'
        iconOff={<EN />}
        iconOn={<ES />}
        onChange={e=>{ changeLenguaje( e.target.checked ) }}
        borderWeight={'light'}
      />
  )
}
