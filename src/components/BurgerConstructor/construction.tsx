import React from 'react';
import ConstStyles from './BurgerConstructor.module.css';
import  {Button, CurrencyIcon,DeleteIcon,LockIcon, DragIcon}  from '@ya.praktikum/react-developer-burger-ui-components';


export default class Constuctor extends React.Component {
    state = {
        ingredients: [
            {
                "_id":"60666c42cc7b410027a1a9b1",
                "name":"Краторная булка N-200i",
                "type":"bun",
                "proteins":80,
                "fat":24,
                "carbohydrates":53,
                "calories":420,
                "price":1255,
                "image":"https://code.s3.yandex.net/react/code/bun-02.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b5",
                "name":"Говяжий метеорит (отбивная)",
                "type":"main",
                "proteins":800,
                "fat":800,
                "carbohydrates":300,
                "calories":2674,
                "price":3000,
                "image":"https://code.s3.yandex.net/react/code/meat-04.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b6",
                "name":"Биокотлета из марсианской Магнолии",
                "type":"main",
                "proteins":420,
                "fat":142,
                "carbohydrates":242,
                "calories":4242,
                "price":424,
                "image":"https://code.s3.yandex.net/react/code/meat-01.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b7",
                "name":"Соус Spicy-X",
                "type":"sauce",
                "proteins":30,
                "fat":20,
                "carbohydrates":40,
                "calories":30,
                "price":90,
                "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b4",
                "name":"Мясо бессмертных моллюсков Protostomia",
                "type":"main",
                "proteins":433,
                "fat":244,
                "carbohydrates":33,
                "calories":420,
                "price":1337,
                "image":"https://code.s3.yandex.net/react/code/meat-02.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b9",
                "name":"Соус традиционный галактический",
                "type":"sauce",
                "proteins":42,
                "fat":24,
                "carbohydrates":42,
                "calories":99,
                "price":15,
                "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b8",
                "name":"Соус фирменный Space Sauce",
                "type":"sauce",
                "proteins":50,
                "fat":22,
                "carbohydrates":11,
                "calories":14,
                "image":"https://code.s3.yandex.net/react/code/sauce-04.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/sauce-04-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9bc",
                "name":"Плоды Фалленианского дерева",
                "type":"main",
                "proteins":20,
                "fat":5,
                "carbohydrates":55,
                "calories":77,
                "price":874,
                "image":"https://code.s3.yandex.net/react/code/sp_1.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9bb",
                "name":"Хрустящие минеральные кольца",
                "type":"main",
                "proteins":808,
                "fat":689,
                "carbohydrates":609,
                "calories":986,
                "price":300,
                "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9ba",
                "name":"Соус с шипами Антарианского плоскоходца",
                "type":"sauce",
                "proteins":101,
                "fat":99,
                "carbohydrates":100,
                "calories":100,
                "price":88,
                "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9bd",
                "name":"Кристаллы марсианских альфа-сахаридов",
                "type":"main",
                "proteins":234,
                "fat":432,
                "carbohydrates":111,
                "calories":189,
                "price":762,
                "image":"https://code.s3.yandex.net/react/code/core.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/core-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/core-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9be",
                "name":"Мини-салат Экзо-Плантаго",
                "type":"main",
                "proteins":1,
                "fat":2,
                "carbohydrates":3,
                "calories":6,
                "price":4400,
                "image":"https://code.s3.yandex.net/react/code/salad.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/salad-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/salad-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b3",
                "name":"Филе Люминесцентного тетраодонтимформа",
                "type":"main",
                "proteins":44,
                "fat":26,
                "carbohydrates":85,
                "calories":643,
                "price":988,
                "image":"https://code.s3.yandex.net/react/code/meat-03.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9bf",
                "name":"Сыр с астероидной плесенью",
                "type":"main",
                "fat":48,
                "carbohydrates":420,
                "calories":3377,
                "price":4142,
                "image":"https://code.s3.yandex.net/react/code/cheese.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
                "__v":0
            },
            {
                "_id":"60666c42cc7b410027a1a9b2",
                "name":"Флюоресцентная булка R2-D3",
                "type":"bun",
                "proteins":44,
                "fat":26,
                "carbohydrates":85,
                "calories":643,
                "price":988,
                "image":"https://code.s3.yandex.net/react/code/bun-01.png",
                "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
                "__v":0
            }
        ]
    }

    render(){
        return (
            
            <div className={ConstStyles.main}>
                <div className={ConstStyles.bugrers_container_block_disabled}>
                    <div className={ConstStyles.bugrers_block_disabled}>
                        <img  height={40} className='{ConstStyles.burger-image}' src='https://code.s3.yandex.net/react/code/bun-02-mobile.png' />
                            <span style={{width: '254px', paddingRight: '20px'}} className="{ConstStyles.burgers_name} ">Краторная булка N-200i (верх)</span>
                            <span  style={{width: '54px', paddingRight: '9px', textAlign: 'right'}} className="text text_type_main-medium">1255</span>
                            <span style={{paddingRight: '24px'}}><CurrencyIcon type="primary"/></span>
                        <LockIcon type="primary" />
                    
                    </div>
                </div>
                <div className={ConstStyles.container_block }> 
                    {this.state.ingredients.map((ingredient)=>{
                        
                    if(ingredient.type != "bun") {
                        return (
                            
                    <div className={ConstStyles.bugrers_block}><DragIcon type="primary" />
                        <img  height={40} className='{ConstStyles.burger-image}' src={ingredient.image_mobile} />
                            <span style={{width: '254px', paddingRight: '20px'}} className="{ConstStyles.burgers_name} ">{ingredient.name}</span>
                            <span  style={{width: '54px', paddingRight: '9px', textAlign: 'right', fontSize: '24px'}}>{ingredient.price}</span>
                            <span style={{paddingRight: '24px'}}><CurrencyIcon type="primary"/></span>
                        <DeleteIcon type="primary" />
                    </div> 
                      
                        );
                    }})}     
                </div>
                <div className={ConstStyles.bugrers_container_block_disabled_bottom}>
                    <div className={ConstStyles.bugrers_block_disabled_bottom}>
                        <img  height={40} className='{ConstStyles.burger-image}' src='https://code.s3.yandex.net/react/code/bun-02-mobile.png' />
                            <span style={{width: '254px', paddingRight: '20px'}} className="{ConstStyles.burgers_name} ">Краторная булка N-200i (низ)</span>
                            <span  style={{width: '54px', paddingRight: '9px', textAlign: 'right', fontSize: '24px'}}>1255</span>
                            <span style={{paddingRight: '24px'}}><CurrencyIcon type="primary"/></span>
                        <LockIcon type="primary" />
                        
                    </div>
                </div>
                <div className={ConstStyles.bottom_price}>
                        <span  style={{paddingRight: '9px', fontSize: '40px'}}>1255</span>
                        <span style={{paddingRight: '24px'}}><CurrencyIcon type="primary"/></span>
                        <Button type="primary" size="large" >Оформить заказ</Button>
                            
                </div>
                
             </div>
         );
    }
}
