import React from 'react';
import ReactDOM from 'react-dom';
import productPropTypes from '../../utils/types';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal');

const ModalOverlay = (props) => {
  const { children, closeModal } = props;
  

  React.useEffect(() => {
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
      //ваша функция закрытия окна
      closeModal()
      }
      });
  })

  return ReactDOM.createPortal(
    <div className="Modal">
      {children}
    </div>,
    modalRoot,
  );
}
ModalOverlay.propTypes = {
  data: productPropTypes,
}

export default ModalOverlay;