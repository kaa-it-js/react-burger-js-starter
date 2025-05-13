import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ onClick }) => {
  return <div className={styles.overlay} onMouseDown={onClick} />;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};
