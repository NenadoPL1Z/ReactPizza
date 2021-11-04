import React, {FC, useState} from 'react';
import PizzaButton from "../../UI/PizzaButton";
import {generateModification} from "../../utils/untils";

interface IPizzaItemProps {
  name: string,
  img? : string
  pizzaCrust: Array<string>
  pizzaSize: Array<string>,
  priceArr: Array<string>,
}

const PizzaItem: FC<IPizzaItemProps> = ({name, img, pizzaSize, pizzaCrust, priceArr}) => {

  const [indexDough, setIndexDough] = useState<number>(0);
  const [indexPrice, setIndexPrice] = useState<number>(0)




  const active = 'main-pizza__type-item--active',
        notActive = 'main-pizza__type-item--not-active'

  return (
    <div className='main-pizza__item'>
      <img className='main-pizza__photo' src={img} alt='123'/>
      <h4 className='main-pizza__item-title'>{name}</h4>
      <div className='main-pizza__type'>
        <div className='main-pizza__type-category'>
          {Array.isArray(pizzaCrust) &&
          pizzaCrust.map((item, index) => {
            const modification = generateModification(index, indexDough, active, notActive)
            return (
              <div
                key={index}
                className={`main-pizza__type-item ${modification}`}
                onClick={() => setIndexDough(index)}
              >{item}</div>
            )
          })}
        </div>
        <div className='main-pizza__type-category'>
          {Array.isArray(pizzaSize) &&
          pizzaSize.map((item, index) => {
            const modification = generateModification(index, indexPrice, active, notActive)
            return (
              <div
                key={index}
                className={`main-pizza__type-item ${modification}`}
                onClick={() => setIndexPrice(index)}
              >{item} см.</div>
            )
          })}
        </div>
      </div>
      <div className='main-pizza__interaction'>
        <h2 className='main-pizza__price'>от {+priceArr[indexPrice] + (indexDough * 30)} &#8381;</h2>
        <PizzaButton>
          <div>Добавить{'' && <span className='main-pizza__counter'>2</span>}</div>
        </PizzaButton>
      </div>
    </div>
  );
};

export default PizzaItem;
