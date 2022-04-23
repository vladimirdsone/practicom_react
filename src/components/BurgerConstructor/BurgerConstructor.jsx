import React from 'react';
import ConstStyles from './BurgerConstructor.module.css';
import  {CurrencyIcon,DeleteIcon, LockIcon, DragIcon, Button, ConstructorElement}  from '@ya.praktikum/react-developer-burger-ui-components';
import {products} from "../../utils/mock-order";

const BurgerConstructor = function()   {
    
    const Main = products.map(function(items, index){
        { if(items.type != 'bun')   {
            return (
                <p key = {items._id} >
                       <DragIcon type="primary" />
                       <ConstructorElement
                        text={items.name}
                        price={items.price}
                        thumbnail={items.image_mobile}/>
                 </p>
             )}};
    }) 
    const BunBottom = products.map(function(items, index){
        { if(items._id === '60666c42cc7b410027a1a9b1')   {
            return (
                  <div key = {items._id}>
                  
                   <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                   />
                    
                   </div>    
               
            )}};
    }) 

    const BunTop = products.map(function(items, index){
        { if(items._id === '60666c42cc7b410027a1a9b1')   {
            return (
                  <div key = {items._id}>
                  
                   <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (вверх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                    />
                    
                   </div>    
               
            )}};
    }) 
    return (
    <div>
        <div className={ConstStyles.maintop}>
           {BunTop}
        </div>  
        <div  className={ConstStyles.main} >
            {Main}
        </div>
        <div className={ConstStyles.mainbottom} >
            {BunBottom}
        </div>
        <div className={ConstStyles.button} >
        <span className="text text_type_main-large">1255</span>
        <span className={ConstStyles.price}><CurrencyIcon type="primary"/></span>
            <Button type="primary" size="large" >Оформить заказ</Button>
        </div>
    </div>
     );
}


export default  BurgerConstructor