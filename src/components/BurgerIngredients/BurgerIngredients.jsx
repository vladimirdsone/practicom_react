
import  {Tab, Counter, CurrencyIcon}  from '@ya.praktikum/react-developer-burger-ui-components';
import IndStyle from './BurgerIngredients.module.css';
import ProductPropTypes from '../../utils/types';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

function Product({productDetails}) {
    return (
        <>
        
        <div className={IndStyle.bgmain}>
            <div  className={IndStyle.image}>
                <img src={productDetails.image} />
            </div>
            <div className={IndStyle.price}>
                {productDetails.price}<CurrencyIcon type="primary"/>
            </div>  
            <div className={IndStyle.ingredients_item}> 
                {productDetails.name}
            </div>   
        </div>  
        </>
    
    );
  }
  Product.propTypes = {
    ProductDetails: ProductPropTypes.isRequired,
   
  }

function BurgerIngredients({BurgersIng}) {
    
    return (
        <>
        <div className={IndStyle.title}>
            <h1>Соберите бургер</h1>
            </div>
        <LabTabs/>
        <ul className={IndStyle.ingredients_block}> 
        <h2 id="bun">Булки</h2>
            <li>
                {BurgersIng.map((prod) => { if(prod.type === 'bun')   {
                    return (
                        <Product  productDetails={prod} /> )
                    }  return false;          
                })}
            </li>
            <h2 id="sauce">Соусы</h2>
            <li>
                {BurgersIng.map((prod) => { if(prod.type === 'sauce')   {
                    return (
                        <Product  productDetails={prod} /> )
                    }  return false;          
                })}
            </li>
            
            <h2 id="main">Ингридиенты</h2>
            <li>
                {BurgersIng.map((prod) => { if(prod.type === 'main')   {
                    return (
                        <Product  productDetails={prod} /> )
                    }  return false;          
                })}
            </li>  
            
            </ul>
    </>
            ) 


    BurgerIngredients.propTypes = {
    BurgersIng: PropTypes.arrayOf(ProductPropTypes).isRequired,
    }
}

export default  BurgerIngredients
 