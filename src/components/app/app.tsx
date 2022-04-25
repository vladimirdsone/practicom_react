import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Header from '../AppHeader/Header';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import AppStyle from './app.module.css';

function App() {
  return (
    <>
    
  
    <Header/>
      <div className={AppStyle.container}>
        <div className={AppStyle.main_block}>
          <BurgerIngredients/>
        </div>
        
        <div className={AppStyle.main}>
          <BurgerConstructor />
        </div>
      </div>
    </>
  )
}

export default App;
