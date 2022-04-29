import React, { useState } from 'react';
import ConstStyles from './BurgerConstructor.module.css';
import  {CurrencyIcon, DragIcon, Button, ConstructorElement}  from '@ya.praktikum/react-developer-burger-ui-components';
import productPropTypes from '../../utils/types';
import PropTypes from 'prop-types';
import Modal from '../modal/modal-constuctor';
import ModalOverlay from '../modal/ModalOverlay';

function Product({productDetails, name}) {
    return (
        <>  
        <p className={ConstStyles.lefticon}><DragIcon type="primary" /></p>
        <ConstructorElement price={productDetails.price} text={name || productDetails.name} thumbnail={productDetails.image_mobile} />
        </>
    
    );
  }
  
Product.propTypes = {
    productDetails: productPropTypes.isRequired,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    name: PropTypes.string,
  }

function BurgerConstructor ({BurgersIng})   {
    
    const [isOpened, setIsOpened] = useState(false);
    const openModal = () => {setIsOpened(!isOpened)}
    const isClosed = (e) => {e.preventDefault(); if (isOpened) {setIsOpened(false);}}
    
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
        <div className={ConstStyles.main} >

            {BurgersIng.map((item) => { if(item.type !== 'bun')   {
                return  (<div  className={ConstStyles.list}>
                            <Product key={item._id} productDetails={item} /> 
                        </div>)
                    } return false;  
            })}
          </div>
            <div className={ConstStyles.mainbottom} >
                <ConstructorElement type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (вверх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                />
            </div>
            <div className={ConstStyles.button}>
            <span className="text text_type_main-large">1255</span>
        <span className={ConstStyles.price}><CurrencyIcon type="primary"/></span><Button type="primary" size="large" onClick={openModal}>Оформить заказ</Button>
            </div>
             
            {isOpened && ( 
             <div >
                <Modal isClosed={isClosed} onClick={openModal}>
                    <ModalOverlay isClosed={isClosed} />
                </Modal>
             </div> ) }
        </div>
    
    ) 
    
    
BurgerConstructor.propTypes = {
    BurgersIng: PropTypes.arrayOf(productPropTypes).isRequired,
    }
}

export default  BurgerConstructor;