import { Lenguaje } from "../interfaces/lenguaje"
import { lenguajeES, lenguajeIN } from '../data/lenguage';
import { setLocalStorage } from "../helpers/setLocalStorage";

const INITIAL_STATE:Lenguaje = (setLocalStorage('isEnglish'))?  ({...lenguajeIN}) : ({...lenguajeES});

type Action = 
|{type:'english', payload: Lenguaje}
|{type:'spanish', payload: Lenguaje};

export const lenguajeReducer = ( state=INITIAL_STATE, action: Action ): Lenguaje => {

    switch (action.type) {
        case 'english':
            return {
                ...state,
                ...action.payload,
            }
            
        case 'spanish':
            return {
                ...state,
                ...action.payload,
            }
    
        default:
            return state
    }

}
