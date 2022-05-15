


export const setLocalStorage = ( key: string )=>{

    const item = localStorage.getItem(key);
    
    if( item!=null && JSON.parse(item) ){
        return true
    }else{
        localStorage.setItem( key, 'false');
        return false
    }
    
}
