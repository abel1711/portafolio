import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useSelectLenguaje, useSelectTheme, useSendEmails } from "../../hooks";
import './formContactEmail.css';

interface Props{
     onClose: ()=> void
 }

export const FormContactEmail = ({ onClose }: Props) => {

    const {theme:{isDark}} = useSelectTheme();
    const { lenguaje:{ modalEmail }} = useSelectLenguaje();
    const { send } = useSendEmails();
    

  return (
    <>
        <Formik
            initialValues={{
                name: '',
                email:'',
                message:''
            }}
            onSubmit={ (values)=>{
                send( values );
                onClose();
            }}
            validationSchema={
                    Yup.object({
                       name: Yup.string()
                                        .max(20,'Must be 20 caracters or less')
                                        .required('The name is required'),
                        message: Yup.string()
                                        .required('The message is required'),
                        email: Yup.string()
                                        .email('Must be an e-mail valid')
                                        .required('the email is required')
                    })
            }
        >
        {
            () =>(
                    <Form className="container-form">

                        <label htmlFor="name" className="form-label">{modalEmail.label1}</label>
                        <Field name='name' className='form-control' />
                        <ErrorMessage name='name' component={'span'} className='text-danger d-block'/>
                        

                        <label htmlFor="email" className="form-label mt-2" >{modalEmail.label2}</label>
                        <Field name='email' type='email'className='form-control'/>
                        <ErrorMessage name='email' component={'span'} className='text-danger d-block'/>

                        <label htmlFor="message" className="form-label mt-2">{modalEmail.label3}</label>
                        <Field name='message' as='textarea' className='form-control'/>
                        <ErrorMessage name='message' component={'span'} className='text-danger d-block'/>

                        <button type='submit' className={`btn  d-block mt-3 w-100 ${(isDark)?'btn-outline-danger': 'btn-primary'}`}>{modalEmail.button}</button>

                    </Form>
            )
        } 
        </Formik></>
  )
}
