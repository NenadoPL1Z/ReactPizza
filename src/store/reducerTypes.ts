import {IPizza} from "../models/IPizza";

export interface IPizzaState {
  pizza: IPizza[]
}

export interface IPizzaAction {
  type: string;
  payload: IPizza[]
}

export interface IFilterState {
  name: string
  type: string
}

export interface IFilterAction {
  type: string;
  payload: {
    name: string
    type: string
  }
}

export interface ISortState {
  value: number
}

export interface ISortAction {
  type: string,
  payload: number
}
