import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useSelectLenguaje } from './useSelectLenguaje';

// interface Values{
//     email: string,
//     name: string,
//     message: string,
// }

export const useSendEmails = ( ) => {

    const { lenguaje:{ modalEmail }} = useSelectLenguaje();

    const send = (values : Record<string, unknown> )=>{

        if( process.env.REACT_APP_SERVICE_KEY && process.env.REACT_APP_TEMPLATE_KEY && process.env.REACT_APP_PUBLIC_KEY){
                        
            emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, values, process.env.REACT_APP_PUBLIC_KEY )
                .then((resp)=> {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: modalEmail.msgOk,
                        showConfirmButton: false,
                        timer: 2000
                      })
                })
                .catch((err)=> {

                    if(navigator.onLine){
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: modalEmail.msgErr,
                            showConfirmButton: false,
                            timer: 2000
                          })
                    }else{
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: modalEmail.msgSW,
                            showConfirmButton: false,
                            timer: 2000
                          })
                    }
                    console.error( err )
                    
    
                });
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: modalEmail.msgErr,
                showConfirmButton: false,
                timer: 1500
              })
            console.error('error con las variables de entorno');
        }
    }


    return {
        send
    }

}
