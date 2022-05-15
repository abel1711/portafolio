import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dark, light } from '../themes/dataThemes';
import { AppDispatch, RootState } from "../store/store";



export const useSelectTheme = () => {

    const dispatch = useDispatch<AppDispatch>();

    const theme = useSelector((state:RootState)=> state.theme);

    
    const changeTheme = ( select: boolean )=>{


        if(select){
            dispatch({type:'dark', payload: dark })
        }else{
            dispatch({type:'light', payload: light });
        };
        
        localStorage.setItem('isDark', JSON.stringify(select) );
    }
  return {  changeTheme, theme };
}
