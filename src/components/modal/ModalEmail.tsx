import { Modal, Text } from '@nextui-org/react';
import { useSelectLenguaje } from '../../hooks/useSelectLenguaje';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { FormContactEmail } from '../forms/FormContactEmail';

interface ModalProps{
    open: boolean;
    onClose: ( x:boolean )=> void;
}
export const ModalEmail = ( {open, onClose }: ModalProps) => {

    const {theme:{colors}} = useSelectTheme();
    const { lenguaje:{modalEmail}} = useSelectLenguaje();

    const handleClose=()=>{

        onClose(false)
    }

  return (
    <>
    <Modal
        closeButton
        open={ open }
        onClose={ handleClose }
        preventClose
        blur
        scroll
        css={{
            backgroundColor: colors.shadowColor,
            color: colors.text,
        }}
    >
        <Modal.Header>
            <Text id="modal-title" size={18} css={{ color: colors.text }}>
            {modalEmail.title1 + ' '}
            <Text b size={18} css={{ color: colors.text }}>
                {modalEmail.title2}
            </Text>
            </Text>
        </Modal.Header>
        <Modal.Body>
            <FormContactEmail onClose={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>

    </>
  )
}
