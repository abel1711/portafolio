import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { lenguajeIN, lenguajeES } from '../data/lenguage';




export const useSelectLenguaje = () => {

    const dispatch = useDispatch<AppDispatch>();

    const lenguaje = useSelector((state:RootState)=> state.lenguaje);

    
    const changeLenguaje = ( select: boolean )=>{

        
        if(select){
            dispatch({type:'english', payload: lenguajeIN })
        }else{
            dispatch({type:'spanish', payload: lenguajeES })
        };

        localStorage.setItem('isEnglish', JSON.stringify(select) );

    }
  return {  changeLenguaje, lenguaje };

}
