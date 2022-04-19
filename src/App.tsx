import React from 'react';
import './App.css';
import Constuctor from './components/BurgerConstructor/construction';
import Header from './components/AppHeader/Header';
import LabTabs from './components/BurgerIngredients/BurgerIngredients';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';


function App() {
  return (
    <>
    <Header/>
    <BurgerIngredients/>
    <Constuctor/>
    </>
  )
}

export default App;
