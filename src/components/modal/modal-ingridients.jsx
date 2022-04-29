import React from 'react';
import modal from './modal-ingridients.module.css'
import productPropTypes from '../../utils/types';
import PropTypes from 'prop-types';

function Modal({ data, isClosed }) {
  
  return (
    <div className={modal.ModalOverlay} onClick={isClosed} >
      <div className={modal.Modal}>
        <div className={modal.title}>
          <h1>Детали ингредиента</h1>
          <div onClick={isClosed} className={modal.closebutton}>✕</div>
        </div>
        <div><img src={data.image} className={modal.img} /></div>
        <div className={modal.name}>{data.name}</div>
          <ul className={modal.energy}>
            <li>
              <h2>Калории, ккал</h2>
              <p>{data.calories}</p>
            </li>
            <li>
              <h2>Белки,г</h2>
              <p>{data.proteins}</p>
            </li>
            <li>
              <h2>Жиры, г</h2>
              <p>{data.fat}</p>
            </li>
            <li>
              <h2>Углеводы, г</h2>
              <p>{data.carbohydrates}</p>
            </li>
          </ul>
      </div>
    </div>
  );
}
export default Modal