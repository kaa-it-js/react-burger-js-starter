import styles from './modal-overlay.module.css';

type ModalOverlayProps = {
  onClick: () => void;
};

export const ModalOverlay = ({ onClick }: ModalOverlayProps) => {
  return <div className={styles.overlay} onMouseDown={onClick} />;
};
