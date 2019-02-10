import reducer from '../../reducers/numbersToProcess';
import { SAVE_NUMBERS } from '../../actions/types';

describe('numbers to process reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      numbers: ''
    });
  });

  it('should handle SAVE_NUMBERS', () => {
    expect(
      reducer(
        {},
        {
          type: SAVE_NUMBERS,
          payload: '1234'
        }
      )
    ).toEqual({
      numbers: '1234'
    });
  });
});
