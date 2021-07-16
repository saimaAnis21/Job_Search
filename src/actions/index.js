const CHANGE_FILTER = 'CHANGE_FILTER';

const changeFilterAction = (filters) => ({
  type: CHANGE_FILTER,
  payload: filters,
});

export default changeFilterAction;
