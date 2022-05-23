import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { lenguajeIN, lenguajeES } from '../data/lenguage';
import Swal from "sweetalert2";




export const useSelectLenguaje = () => {

    const dispatch = useDispatch<AppDispatch>();

    const lenguaje = useSelector((state:RootState)=> state.lenguaje);

    
    const changeLenguaje = ( select: boolean )=>{

        
        if(select){
            dispatch({type:'english', payload: lenguajeIN })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: lenguaje.changeIN,
                showConfirmButton: false,
                timer: 1500
              });
            }else{
                dispatch({type:'spanish', payload: lenguajeES })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: lenguaje.changeES,
                    showConfirmButton: false,
                    timer: 1500
                  });
        };

        localStorage.setItem('isEnglish', JSON.stringify(select) );

    }
  return {  changeLenguaje, lenguaje };

}
