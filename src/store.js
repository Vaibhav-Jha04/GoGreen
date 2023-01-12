// module

export const createSlice = (name, initialState, reducers) => {
  const actions = Object.fromEntries(
    Object.keys(reducers).map(key => [key, (payload) => ({ type: `${name}/${key}`, payload })])
  );
  const reducer = (state = initialState, action) => {
    const handler = reducers[action.type?.split('/')[1]];
    return handler ? handler(state, action) : state;
  };
  return { actions, reducer };
};
