import { createReducer, on } from '@ngrx/store';
import * as DisplayActions from './display.action';
//add reset next

export const initialState = "";


export function displayReducer(state, action: DisplayActions.All) {
  console.log('Action:', action);
  console.log('Current State:', state);
  switch (action.type) {
    case DisplayActions.DISPLAY_CHANGED:
      const newState = state + action.payload;
      console.log('New State:', newState);
      return newState;
    break;
    default:
      return initialState;
  }

}