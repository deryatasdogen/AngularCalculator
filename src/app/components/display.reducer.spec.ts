import * as dReducer from './display.reducer';
import * as DisplayActions from './display.action';

describe('DisplayReducer', () => {
    it('should calculate the operation when "=" called', () => {
        const result = dReducer.displayReducer("7*8", new DisplayActions.ResultCalculated('='));
        expect(result).toEqual(56);
    })
})