import React, { useState } from 'react';
import ConstStyles from './BurgerConstructor.module.css';
import  {CurrencyIcon, DragIcon, Button, ConstructorElement}  from '@ya.praktikum/react-developer-burger-ui-components';
import productPropTypes from '../../utils/types';
import PropTypes from 'prop-types';
import Modal from '../OrderDetails/modal-constuctor';
import ModalOverlay from '../modal/ModalOverlay';

function Product({productDetails, name}) {
    return (
        <>  
            <p className={ConstStyles.lefticon}>
                <DragIcon type="primary" />
            </p>
              <ConstructorElement  price={productDetails.price} text={name || productDetails.name} thumbnail={productDetails.image_mobile} />
        </>
    );
  }
  
Product.propTypes = {
    productDetails: productPropTypes.isRequired,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
  }
  Product.defaultProps = {
    type: 'middle',
    isLocked: false,
    name: null,
  };

function BurgerConstructor ({BurgersIng})   {
    
    const [isopened, setIsopened] = useState(false);
    const openModal = () => {setIsopened(!isopened)}
    const closeModal = (e) => {
        if (e.keyCode != 27) {
            e.keydown();
          }
        e.preventDefault(); 
        if (isopened) {setIsopened(false);
        }}
    
    return (
    <div>
        <div className={ConstStyles.maintop}>
            <ConstructorElement type="top"
                isLocked={true}
                text="Краторная булка N-200i (вверх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
            />
        </div>
        <div className={ConstStyles.main}>
            {BurgersIng.map((item) => { 
                return item.type !== 'bun' && ( 
                <div className={ConstStyles.list} key={item._id}> 
                    <Product  productDetails={item} /> 
                </div>) })}
        </div>
        <div className={ConstStyles.mainbottom}>
                <ConstructorElement type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (вверх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                />
        </div>
        <div className={ConstStyles.button}>
            <span className="text text_type_main-large">1255</span>
                <span className={ConstStyles.price}>
                    <CurrencyIcon type="primary"/>
                </span>
                    <Button type="primary" size="large" onClick={openModal}>Оформить заказ</Button>
        </div>
             
            {isopened && ( 
             <div >
                <Modal closeModal={closeModal} onClick={openModal}>
                    <ModalOverlay closeModal={closeModal} />
                </Modal>
             </div> ) }
        </div>
    
    ) 
    
    
BurgerConstructor.propTypes = {
    BurgersIng: PropTypes.arrayOf(productPropTypes).isRequired,
    }
}

export default  BurgerConstructor;