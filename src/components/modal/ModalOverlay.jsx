import React from 'react';
import ReactDOM from 'react-dom';
import productPropTypes from '../../utils/types';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal');

const ModalOverlay = (props) => {
const { children, closeModal } = props;
const modalRoot = document.getElementById('modal');
  
React.useEffect(() => {
  window.addEventListener("keydown", closeModal);
  return () => {
    window.removeEventListener("keydown", closeModal);
  };
}, []);

  return ReactDOM.createPortal(
    <div className="Modal">
      {children}
    </div>,
    modalRoot,
  );
}
ModalOverlay.props = {
  data: productPropTypes,
  ProductDetails: PropTypes.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,

}

export default ModalOverlay;