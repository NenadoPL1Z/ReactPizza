import React, {FC} from 'react';
import BasketButton from "./BasketButton";

const BasketItem: FC = () => {
  return (
    <div className='basket__item'>
        <div className='basket__item-image'>
          <img src='./image/cheeseburgerPizza.png' alt='test'/>
        </div>
        <div className='basket__item-info'>
          <div className='basket__item-name'>Сырный цепленок</div>
          <div className='basket__item-type'>тонкое тесто, 26см.</div>
        </div>
      <div className='basket__item-counter'>
        <BasketButton title='+'/>
        <div className='basket__item-number'>2</div>
        <BasketButton title='-'/>
      </div>
      <div className='basket__item__price'>770 &#8381;</div>
      <BasketButton title='x'/>
    </div>
  );
};

export default BasketItem;
