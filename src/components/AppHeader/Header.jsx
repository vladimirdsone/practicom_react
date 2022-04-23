import {ListIcon, Logo, ProfileIcon, BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import HeaderStyles from './Header.module.css'
  
  function Header() {
    return (
      <div className={HeaderStyles.header}>
        <div className={HeaderStyles.container}>
          <div className={HeaderStyles.block}>
          <BurgerIcon type="primary" />
            <p className='text_type_main-small'>Конструктор</p>
          </div>
          <div className={HeaderStyles.block}>
            <ListIcon type="secondary" />
            <span className='{HeaderStyles.disabled} text_type_main-small'>Лента заказов</span>
          </div>
        </div>
        <div className={HeaderStyles.logo}><Logo /></div>
        <div className={HeaderStyles.block}>
          <ProfileIcon type="secondary" />
          <span className='{HeaderStyles.disabled} text_type_main-small'>Личный кабинет</span>
        </div>
      </div>
    )
  }
  
  export default Header;