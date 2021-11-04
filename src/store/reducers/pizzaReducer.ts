import {IPizzaAction, IPizzaState} from "../reducerTypes";

const defaultState: IPizzaState = {
  pizza: []
}

export enum PizzaType {
  ALL_PIZZA = 'ALL_PIZZA',
  SPICY_PIZZA = 'SPICY_PIZZA',
  MEAT_PIZZA = 'MEAT_PIZZA',
  GRILL_PIZZA = 'GRILL_PIZZA',
  CLOSE_PIZZA = 'CLOSED_PIZZA',
  VEGETARIAN_PIZZA = 'VEGETARIAN_PIZZA',
}

export const pizzaReducer = (state = defaultState, action: IPizzaAction) => {
  switch (action.type) {
    case PizzaType.ALL_PIZZA:
      return {...state, pizza: action.payload}
    case PizzaType.SPICY_PIZZA:
      return {...state, pizza: action.payload}
    case PizzaType.MEAT_PIZZA:
      return {...state, pizza: action.payload}
    case PizzaType.GRILL_PIZZA:
      return {...state, pizza: action.payload}
    case PizzaType.CLOSE_PIZZA:
      return {...state, pizza: action.payload}
    case PizzaType.VEGETARIAN_PIZZA:
      return {...state, pizza: action.payload}
    default:
      return state
  }
}
