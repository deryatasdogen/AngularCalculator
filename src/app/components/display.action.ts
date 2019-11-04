import { Action } from '@ngrx/store';

export const DISPLAY_CHANGED = '[Display Component] Display Changed';
export const RESULT_CALCULATED = '[Display Component] Result Calculated';
export const RESET_SCREEN ='[Display Component] Reset Screen';

export class DisplayChanged implements Action {
    readonly type = DISPLAY_CHANGED;
    constructor(public payload: string) { }
}

export class ResultCalculated implements Action {
    readonly type = RESULT_CALCULATED;
    constructor(public payload: string) { }
}
export class ResetScreen implements Action{
    readonly type=RESET_SCREEN;
    constructor(public payload: string) { }

}

export type All = DisplayChanged | ResultCalculated | ResetScreen;