import React from 'react';
import modal from './modal-constructor.module.css'
import img from '../../images/check.png';

function Modal({ isClosed }){
  function handleClick(e) { e.preventDefault();}
  return (
  
  <div className={modal.ModalOverlay}>
    <div className={modal.Modal} onClick={handleClick}>
      <div onClick={isClosed} className={modal.closebutton}>✕</div>
        <div className={modal.OrderDetails}>
          <p className={`text text_type_digits-large ${modal.order_numder}`}>56546</p>
            <h2>Идентификатор заказа</h2>
          <img src={img} alt="error" className={modal.image} />
            <h2>Ваш заказ начали готовить</h2>
            <h2 className={modal.status}>Дождитесь готовности на орбитальной станции</h2>
        </div>
    </div>
  </div>
 
  )
}

export default Modal