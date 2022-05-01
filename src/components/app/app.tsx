import React, {useState} from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Header from '../AppHeader/Header';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import AppStyle from './app.module.css';

const api_url ='https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
 
  React.useEffect(() => {
    const getIngridients = () => {
    
      fetch(api_url)
        .then((res) => { if (!res.ok) throw new Error('ошибка'); else return res.json()
        })
        .then((req) => { setIngredients(req.data); setIsLoading(false)})
        .catch((e) => {setHasError(true); setIsLoading(false); return e; })
        .then((req) => { setIngredients(req.data); setIsLoading(false)});
        
    };
    getIngridients();
   }, [])
 
  return (
    <>
        <Header/>
      <div className={AppStyle.container}>
        <div className={AppStyle.main_block}>
          <BurgerIngredients BurgersIng={ingredients}/>
        </div>
        <div className={AppStyle.main}>
          <BurgerConstructor  BurgersIng={ingredients}/>
        </div>
      </div> 
    </>
  )
}

export default App;
