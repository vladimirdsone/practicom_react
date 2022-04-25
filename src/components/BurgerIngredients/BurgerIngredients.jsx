import React from 'react';
import { useState } from 'react';
import  {Tab, Counter, CurrencyIcon}  from '@ya.praktikum/react-developer-burger-ui-components';
import IndStyle from './BurgerIngredients.module.css';
import {products} from "../../utils/mock-order"

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

const BurgerIngredients = function() {

    const bun = products.map(function(item, index){
        if(item.type === 'bun')   {
        return (
       
        <div key = {item._id} className={IndStyle.bgmain}>
            <div  className={IndStyle.image}>
                <img src={item.image} />
            </div>
            <div className={IndStyle.price}>
                {item.price}<CurrencyIcon type="primary"/>
            </div>  
            <div className={IndStyle.ingredients_item}> 
                {item.name}
            </div>   
        </div>
         
        )}
    })

    const sauce = products.map(function(item, index){
        if(item.type === 'sauce')   {
        return (
       
        <div key = {item._id} className={IndStyle.bgmain}>
            <div  className={IndStyle.image}>
                <img src={item.image} />
            </div>
            <div className={IndStyle.price}>
                {item.price}<CurrencyIcon type="primary"/>
            </div>  
            <div className={IndStyle.ingredients_item}> 
                {item.name}
            </div>   
        </div>
         
        )}
    })
    const main = products.map(function(item, index){
        if(item.type === 'main')   {
        return (
       
        <div key = {item._id} className={IndStyle.bgmain}>
            <div  className={IndStyle.image}>
                <img src={item.image} />
            </div>
            <div className={IndStyle.price}>
                {item.price}<CurrencyIcon type="primary"/>
            </div>  
            <div className={IndStyle.ingredients_item}> 
                {item.name}
            </div>   
        </div>
         
        )}
    })
  
        
    return (
        <>
            <div className={IndStyle.heading}>
                <h1>Соберите бургер</h1>
                <LabTabs />
                <ul className={IndStyle.ingredients_block}>
                    <li>
                        <h2 id="bun">Булки</h2>
                        {bun}
                    </li>
                    <li>
                        <h2 id="sauce">Соусы</h2>
                        {sauce}
                    </li>
                    <li>
                        <h2 id="main">Начинки</h2>
                        {main}
                    </li>
                </ul>
            </div>
        </>
     );
}


export default  BurgerIngredients
 