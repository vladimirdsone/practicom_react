import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Header from '../AppHeader/Header';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import AppStyle from './app.module.css';

function App() {
  const [api, setApi] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
 
  React.useEffect(() => {
    const getIngridients = async () => {
      setIsLoading(true);
      fetch('https://norma.nomoreparties.space/api/ingredients')
        .then((res) => {
          if (!res.ok) throw new Error('ошибка'); else return res.json()
        })
        .then((req) => { setApi(req.data); setIsLoading(false)})
        .catch((e) => { setHasError(true);setIsLoading(false); return e; });
    };
    getIngridients();
  }, [])
  
  
  
  return (
    <>
    
  
    <Header/>
      <div className={AppStyle.container}>
        <div className={AppStyle.main_block}>
          <BurgerIngredients BurgersIng={api}/>
        </div>
        
        <div className={AppStyle.main}>
          <BurgerConstructor  BurgersIng={api}/>
        </div>
      </div>
    </>
  )
}

export default App;
