import { Switch } from "@nextui-org/react";
import { useSelectTheme } from "../../hooks/useSelectTheme";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";


export const SwitchTheme = () => {

  
  const {changeTheme, theme} =  useSelectTheme();
      
      
  return (
        <Switch
        checked={ !theme.isDark }
        squared
        size={'md'}
        color='primary'
        iconOn={<MoonIcon filled />}
        iconOff={<SunIcon filled/>}
        onChange={e=>{ changeTheme( !e.target.checked ) }}
      />
  )
}
