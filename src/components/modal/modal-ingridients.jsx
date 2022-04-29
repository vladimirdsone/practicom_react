
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import productPropTypes from '../../utils/types';
import bgStyle from './modal-ingridients.module.css'

function ModalOverlay({ data, isClosed }) {
  const image = (
    <img
      className={bgStyle.img2}
      src={data.image}
      alt={data.name}
    />
  );
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  // Событие клика на этой кнопке будет всплывать вверх к родителю,
  // так как здесь не определён атрибут 'onClick'
  return (
    <div className={bgStyle.overlay} onClick={isClosed} >
      <div className={bgStyle.details} onClick={handleSubmit}>
        <div className={bgStyle.child}>
          <h1>Детали ингредиента</h1>
         
        </div>
        <div>{image}</div>
        <div className={bgStyle.name2}>{data.name}</div>
        <ul className={bgStyle.energy}>
          <li>
            <h2>Калории, ккал</h2>
            <p>{data.calories}</p>
          </li>
          <li>
            <h2>Белки, г</h2>
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

ModalOverlay.propTypes = {
  data: productPropTypes.isRequired,
  onClose: PropTypes.func.isRequired,
}
export default ModalOverlay;