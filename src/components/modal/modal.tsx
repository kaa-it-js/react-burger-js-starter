import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlay } from '../modal-overlay/modal-overlay.js';

import styles from './modal.module.css';

type ModalProps = {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modals')!;

const Modal = ({ title, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={`${styles.title} text text_type_main-large`}>{title}</h3>
          <button className={styles.button} type='button'>
            <CloseIcon type='primary' onClick={onClose} />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
