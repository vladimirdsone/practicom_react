import React from 'react';
import ReactDOM from 'react-dom';
import productPropTypes from '../../utils/types';

const modalRoot = document.getElementById('modal');
const ModalOverlay = (props) => {
  const { children, isClosed } = props;

  React.useEffect(() => {
    document.addEventListener('keydown', isClosed);
    return () => { document.removeEventListener('keydown', isClosed);}
  })

  return ReactDOM.createPortal(
    <div className="ModalOverlay">
      {children}
    </div>,
    modalRoot,
  );
}
ModalOverlay.propTypes = {
  data: productPropTypes,
}

export default ModalOverlay;