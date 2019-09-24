import { Action } from '@ngrx/store';

export const DISPLAY_CHANGED = '[Display Component] Display Changed';
export const RESULT_CALCULATED = '[Display Component] Result Calculated';
//export const reset = createAction('[Display Component] Reset');s

export class DisplayChanged implements Action {
    readonly type = DISPLAY_CHANGED;
    constructor(public payload: string) { }
}

export class ResultCalculated implements Action {
    readonly type = RESULT_CALCULATED;
    constructor(public payload: string) { }
}

export type All = DisplayChanged | ResultCalculated;