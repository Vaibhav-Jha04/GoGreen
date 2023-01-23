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

const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];
  return {
    getState: () => state,
    dispatch: (action) => { state = reducer(state, action); listeners.forEach(l => l()); },
    subscribe: (listener) => { listeners.push(listener); return () => listeners.splice(listeners.indexOf(listener), 1); },
  };
};
export default createStore;
