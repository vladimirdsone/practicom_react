
import  {Tab, Counter, CurrencyIcon}  from '@ya.praktikum/react-developer-burger-ui-components';
import IndStyle from './BurgerIngredients.module.css';
import ProductPropTypes from '../../utils/types';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal-ingridients';
import ModalOverlay from '../modal/ModalOverlay';

function LabTabs() {
    const [current, setCurrent] = useState('bun');
    const handleChange = (prop) => {
    setCurrent(prop);
    document.getElementById(prop).scrollIntoView();
  }
  return (
    <div className={IndStyle.tabs}>
      <Tab value="bun" active={current === 'bun'} onClick={handleChange}>Булки</Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={handleChange}>Соусы</Tab>
      <Tab value="main" active={current === 'main'} onClick={handleChange}>Начинки</Tab>
    </div>
  );
}

function Product({productDetails, isOpen}) {
    const handleClick = () =>{isOpen(productDetails)}
    return (
        <>
        <div className={IndStyle.bgmain} onClick={handleClick}>
            <div className={IndStyle.burger_counter}>
                <Counter count={2} size="small" />
            </div>
            <div  className={IndStyle.burger_image}>
                <img src={productDetails.image} />
            </div>
            <div className={IndStyle.burger_price}>
                {productDetails.price}
                <CurrencyIcon />
            </div>
            <div className={IndStyle.burger_name}>{productDetails.name}</div>
        </div>
        </>
    
    );
  }
Product.propTypes = {
    ProductDetails: ProductPropTypes.isRequired,
}

function BurgerIngredients({BurgersIng}) {
    const [productData, setProductData] = useState(null);
    const [isOpened, setIsOpened] = useState(false);
    
    const isOpen = (prod) => {
        if (!isOpened) { setProductData(prod); setIsOpened(true);}
      }
    const isClosed = (e) => { e.preventDefault(); if (isOpened) 
        { setProductData(null); setIsOpened(false); }
      }
    return (
        <>
        <div className={IndStyle.title}>
            <h1>Соберите бургер</h1>
        </div>
        <LabTabs/>
        <ul className={IndStyle.burger_block}> 
        <h2 id="bun">Булки</h2>
            <li>
                {BurgersIng.map((prod) => { if(prod.type === 'bun')   {
                    return (
                        <Product productDetails={prod} isOpen={isOpen}/> )
                    }  return false;          
                })}
            </li>
            <h2 id="sauce">Соусы</h2>
            <li>
                {BurgersIng.map((prod) => { if(prod.type === 'sauce')   {
                    return (
                        <Product  productDetails={prod} isOpen={isOpen}/> )
                    }  return false;          
                })}
            </li>
            
            <h2 id="main">Ингридиенты</h2>
            <li>
                {BurgersIng.map((prod) => { if(prod.type === 'main')   {
                    return (
                        <Product  productDetails={prod} isOpen={isOpen}/> )
                    }  return false;          
                })}
            </li>  
            
        </ul>
        {isOpened && productData && (
        
        <Modal isClosed={isClosed}>
            <ModalOverlay data={productData} isClosed={isClosed} />
        </Modal>
        
        )}

    </>
            ) 


    BurgerIngredients.propTypes = {
    BurgersIng: PropTypes.arrayOf(ProductPropTypes).isRequired,
    }
}

export default  BurgerIngredients
 