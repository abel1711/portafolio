
import './modal.css';
import { useSelectLenguaje } from '../../hooks/useSelectLenguaje';

interface Props{ 
    name: string;
    img: string;
    url?: string;
    desc: string;
    id: string;
    git?: string;
};

export const Modal = ({ desc, img, name, url, id, git }:Props) => {

    const {lenguaje:{ isEnglish }} = useSelectLenguaje();

  return (
    <div>
        <div className="modal fade" id={`staticBackdrop${id}`}  data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{ name }</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img src={img} alt={name} className='w-100' />
                    <p className="mt-5">{desc}</p>
                </div>
                <div className="modal-footer">
                    {
                        git && <button className="btn btn-primary"><a href={git} className='text-white' rel="noreferrer" target='_blank'><i className="bi bi-github"></i></a></button>
                    }
                    {
                        url && <button className='btn btn-primary '><a href={url} className='text-white' rel="noreferrer" target='_blank'>{ isEnglish ? 'Visit page': 'Visitar'}</a></button>
                    }
                    
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{ isEnglish ? 'Close': 'Cerrar'}</button> */}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
