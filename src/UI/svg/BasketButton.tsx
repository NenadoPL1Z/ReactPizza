import React, {FC} from 'react';

interface IBasketButton {
  children: React.ReactChildren | React.ReactNode
}

const BasketButton: FC<IBasketButton> = ({children}) => {
  return (
    <button className='button'>
      {children}
    </button>
  );
};

export default BasketButton;
