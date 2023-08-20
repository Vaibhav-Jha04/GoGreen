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

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

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

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
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

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)])
  );

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

export const applyMiddleware = (...middlewares) => (store) => {
  let dispatch = store.dispatch;
  middlewares.reverse().forEach(mw => { dispatch = mw(store)(dispatch); });
  return { ...store, dispatch };
};
