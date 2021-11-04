import React, {FC} from 'react';
import {ButtonProps} from "@material-ui/core";

const PizzaButton: FC<ButtonProps> = (props) => {
  return (
    <button className='button pizza-button'>
      {props.children}
    </button>
  );
};

export default PizzaButton;
