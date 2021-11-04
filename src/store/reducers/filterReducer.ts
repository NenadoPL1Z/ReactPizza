import {IFilterAction, IFilterState} from "../reducerTypes";

const defaultValue : IFilterState = {
  name: 'Все пиццы',
  type: 'All'
}

export enum FilterType {
  FILTER_CHANGE = 'FILTER_CHANGE'
}

export const filterReducer = (state = defaultValue, action: IFilterAction) => {
  switch (action.type) {
    case (FilterType.FILTER_CHANGE):
      return {...state, type: action.payload.type, name: action.payload.name}
    default:
      return state
  }
}
