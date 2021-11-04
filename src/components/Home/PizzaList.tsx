import React, {FC, useEffect, useState} from 'react';
import PizzaItem from "./PizzaItem";
import {requestGetApi} from "../../services/fetch";
import {IPizza} from "../../models/IPizza";
import {useTypeSelector} from "../../hook/useTypeSelector";
import {useDispatch} from "react-redux";
import {PizzaType} from "../../store/reducers/pizzaReducer";
import {generatePizzaArr} from "../../utils/untils";


const PizzaList: FC = () => {

  const dispatch = useDispatch();

  const pizzaObj = useTypeSelector(state => state.pizzaReducer)
  const pizzaFilter = useTypeSelector(state => state.filterReducer)
  const pizzaSort = useTypeSelector(state => state.sortReducer)

  const finalPizzaArr = generatePizzaArr(pizzaObj.pizza, pizzaFilter.type, pizzaSort.value)




  useEffect(() => {
    requestGetApi('/jsons/pizza.json')
      .then(res => {
        if (res) {
          const data = res as Array<IPizza>
          dispatch({type: PizzaType.ALL_PIZZA, payload: data})
        }
      })
  }, [])

  useEffect(() => {
    console.log(finalPizzaArr.sort((a: IPizza, b: IPizza) => {
      if (pizzaSort.value == 2) {
        return +a.price[0] - +b.price[0]
      }
      return +a - +b
    }))
  }, [finalPizzaArr])


  return (
    <section className='main-pizza'>
      <h1 className='main-pizza__title'>{pizzaFilter.name}</h1>
      <div className='main-pizza__block'>
        {finalPizzaArr.length ?
          finalPizzaArr.map(pizzaItem => (
            <PizzaItem
              key={pizzaItem.id}
              name={pizzaItem.name}
              img={pizzaItem.img}
              pizzaCrust={pizzaItem.pizzaCrust}
              pizzaSize={pizzaItem.pizzaSize}
              priceArr={pizzaItem.price}
            />
          )) : <h1>В данной категории не найдено ни одной пиццы! 🥺</h1>}
      </div>
    </section>
  );
};

export default PizzaList;
