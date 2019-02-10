import reducer from '../../reducers/words';
import { FETCH_WORDS } from '../../actions/types';

describe('words reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_WORDS', () => {
    expect(
      reducer(
        {},
        {
          type: FETCH_WORDS,
          payload: 'any'
        }
      )
    ).toEqual('any');
  });
});
