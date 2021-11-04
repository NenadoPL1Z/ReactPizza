import React, {FC} from 'react';
import BasketItem from "./BasketItem";
import BasketIcon from "../../UI/svg/BasketIcon";
import DeleteBasketIcon from "../../UI/svg/DeleteBasketIcon";
import BasketButton from "../../UI/svg/BasketButton";

const BasketList: FC = () => {
  return (
    <div className='basket__wrapper'>
      <div className='basket__header'>
        <div className='basket__name'>
          <BasketIcon/>
          <h1 className='basket__title'>Корзина</h1>
        </div>
        <div className='basket__clear'>
          <DeleteBasketIcon/>
          <h5 className='basket__subtitle'>Очичстить корзину</h5>
        </div>
      </div>
      <BasketItem/>
      <div className='basket__counter'>
        <div className='basket__pizza-counter'>Всего пицц: <span>3 шт.</span></div>
        <div className='basket__price'>Сумма заказа: <span>300 &#8381;</span></div>
      </div>
      <div className='basket__buttons'>
        <BasketButton>Вернуться назад</BasketButton>
        <BasketButton>Оплатить сейчас</BasketButton>
      </div>
    </div>
  );
};

export default BasketList;
