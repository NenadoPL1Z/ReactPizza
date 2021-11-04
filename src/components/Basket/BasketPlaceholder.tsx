import React, {FC} from 'react';
import {useHistory} from "react-router-dom";

const BasketPlaceholder: FC = () => {

  const router = useHistory();

  return (
    <div className='basket__placeholder'>
      <h1 className='basket__placeholder-title'>Корзина пустая 😕</h1>
      <p className='basket__placeholder-description'>Вероятней всего, вы не заказывали ещё пиццу. <br/>
        Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <div>
        <img className='basket__placeholder-img' src='./image/basketPlaceholder.png' alt='placeholder' />
      </div>
      <button className='basket__placeholder-button' onClick={() => router.push('/')}>Вернуться назад</button>
    </div>
  );
};

export default BasketPlaceholder;
