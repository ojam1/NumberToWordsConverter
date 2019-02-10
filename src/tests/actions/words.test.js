import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { resetWordState } from '../../actions/words';
import { RESET_WORD_STATE } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('words actions', () => {
  it('should reset word state', () => {
    const expectedAction = resetWordState();

    const store = mockStore({});

    store.dispatch(expectedAction);

    expect(store.getActions()).toEqual([
      {
        type: RESET_WORD_STATE
      }
    ]);
  });
});
