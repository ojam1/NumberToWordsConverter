import reducer from '../../reducers/words';
import { FETCH_WORDS, RESET_WORD_STATE } from '../../actions/types';

describe('words reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(['initial_state']);
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

  it('should handle RESET_WORD_STATE', () => {
    expect(
      reducer(
        ['initial_state'],
        {
          type: RESET_WORD_STATE
        }
      )
    ).toEqual(['initial_state']);
  });
});
