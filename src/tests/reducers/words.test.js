import reducer from '../../reducers/words';
import { FETCH_WORDS, RESET_WORD_STATE } from '../../actions/types';

describe('words reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      apiData: [],
      apiLoaded: false
    });
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
    ).toEqual({
      apiData: 'any',
      apiLoaded: true
    });
  });

  it('should handle RESET_WORD_STATE', () => {
    expect(
      reducer(
        {},
        {
          type: RESET_WORD_STATE
        }
      )
    ).toEqual({
      apiData: [],
      apiLoaded: false
    });
  });
});
