import { setLocalStorage } from "../helpers/setLocalStorage";
import { InterfaceTheme } from "../interfaces/interfaces"
import { dark, light } from "../themes/dataThemes";



const INITIAL_STATE:InterfaceTheme = (setLocalStorage('isDark'))  ?  ({...dark}) : ({...light});


export type ActionTheme = 
    | {type: 'dark', payload: InterfaceTheme }
    | {type: 'light', payload: InterfaceTheme }

export const themeReducer = ( state =INITIAL_STATE, action: ActionTheme )=> {
    
    switch (action.type) {
        case 'dark':
            return{
                ...state,
                ...action.payload,
                isDark: true
            }

        case 'light':
            return{
                ...state,
                ...action.payload,
                isDark: false
            }
    
        default:
            return state;
    }
}
