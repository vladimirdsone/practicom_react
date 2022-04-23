import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Header from '../AppHeader/Header';
import LabTabs from '../BurgerIngredients/BurgerIngredients';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import {ConstructorElement}  from '@ya.praktikum/react-developer-burger-ui-components'; 

function App() {
  return (
    <>
    <Header/>
    <BurgerIngredients/>
    <BurgerConstructor />
    </>
  )
}

export default App;
