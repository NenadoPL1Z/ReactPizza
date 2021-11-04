import React, {FC} from 'react';

interface IBasketButton {
  title: string
}

const BasketButton: FC<IBasketButton> = ({title}) => {

  const modification =
    title === '+' ? 'basket__item-button--plus' :
    title === '-' ? 'basket__item-button--minus' : 'basket__item-button--clear'

  return (
    <button className={`basket__item-button ${modification}`}/>
  );
};

export default BasketButton;
