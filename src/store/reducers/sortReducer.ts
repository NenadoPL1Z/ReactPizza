import {ISortAction, ISortState} from "../reducerTypes";

const defaultValue: ISortState = {
  value: 1
}

export enum SortTypes {
  CHANGE_SORT='CHANGE_SORT'
}

export const sortReducer = (state = defaultValue, action: ISortAction) => {
  switch (action.type) {
    case (SortTypes.CHANGE_SORT):
      return {...state, value: action.payload}
    default:
      return state
  }
}
