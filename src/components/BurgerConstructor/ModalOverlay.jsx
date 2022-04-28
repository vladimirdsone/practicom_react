import React from 'react';
import ConstStyles from './BurgerConstructor.module.css';
import img from '../../images/done.png';
import PropTypes from 'prop-types';
import closeButton from '../../images/icon.png'

function Child({ onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <section className={ConstStyles.overlay}>
      <div className={ConstStyles.details} onClick={handleSubmit}>
        <img src={closeButton} onClick={onClose} className={ConstStyles.closeIco} alt="X" />
        <div className={ConstStyles.content}>
          <p className={`text text_type_digits-large ${ConstStyles.num}`}>123456</p>
          <h1>идентификатор заказа</h1>
          <img src={img} alt="error" className={ConstStyles.image} />
          <p>Ваш заказ начали готовить</p>
          <p className={ConstStyles.disabled}>Дождитесь готовности на орбитальной станции</p>
        </div>
      </div>
    </section>
  );
}
Child.propTypes = {
  onClose: PropTypes.func.isRequired,
}
export default Child;