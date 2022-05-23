import { Switch } from "@nextui-org/react";
import { useSelectTheme } from "../../hooks/useSelectTheme";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { motion } from 'framer-motion';


export const SwitchTheme = () => {

  
  const {changeTheme, theme} =  useSelectTheme();
      
      
  return (

      <Switch
      checked={ !theme.isDark }
      squared
      size={'md'}
      // color='primary'
      css={{
        
      }}
      iconOff={<MoonIcon filled />}
      iconOn={<SunIcon filled/>}
      onChange={e=>{ changeTheme( !e.target.checked ) }}
    />
  )
}
