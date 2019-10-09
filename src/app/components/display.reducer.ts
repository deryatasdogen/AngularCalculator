import { createReducer, on, State } from '@ngrx/store';
import * as DisplayActions from './display.action';

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
    case DisplayActions.RESULT_CALCULATED:
       var result = eval(state);
       console.log("Result:", result);
       return result;
    case DisplayActions.RESET_SCREEN:
      return initialState;

    default:
      return initialState;
  }

}