import filterReducer from '../reducers/filter';
import state from '../state';

test('initialState to be as expected', () => {
  expect(state).toEqual({
    filters: {
      company: '--',
      category: '--',
      level: '--',
    },
  });
});

test('FilterReducer can change filter ', () => {
  const action = {
    type: 'CHANGE_FILTER',
    payload: {
      filters: {
        company: 'com1',
        category: 'cat1',
        level: 'lev1',
      },
    },
  };
  expect(filterReducer(state, action)).toEqual({
    filters: {
      company: 'com1',
      category: 'cat1',
      level: 'lev1',
    },
  });
});

test('filmFilterReducer doesn\'t change filter when given wrong action ', () => {
  const action = {
    type: 'random',
    filter: {
      filters: {
        company: 'com2',
        category: 'cat2',
        level: 'lev2',
      },
    },
  };
  expect(filterReducer(state, action)).not.toEqual({
    filters: {
      company: 'com2',
      category: 'cat2',
      level: 'lev2',
    },
  });
});
