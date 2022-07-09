export function reducer(state, action) {
  state._currentValue.path = action.path;
  return state;
}
