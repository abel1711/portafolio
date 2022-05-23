import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dark, light } from '../themes/dataThemes';
import { AppDispatch, RootState } from "../store/store";
import Swal from 'sweetalert2';
import { useSelectLenguaje } from "./useSelectLenguaje";



export const useSelectTheme = () => {

    const dispatch = useDispatch<AppDispatch>();

    const theme = useSelector((state:RootState)=> state.theme);
    const { selectDark, selectLight } = useSelectLenguaje().lenguaje;
    
    const changeTheme = ( select: boolean )=>{


        if(select){
            dispatch({type:'dark', payload: dark })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: selectDark,
                showConfirmButton: false,
                timer: 1500
              });
            }else{
                dispatch({type:'light', payload: light });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: selectLight,
                    showConfirmButton: false,
                    timer: 1500
                  });
        };


        
        localStorage.setItem('isDark', JSON.stringify(select) );
    }
  return {  changeTheme, theme };
}
