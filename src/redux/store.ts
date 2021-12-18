import {
  AnyAction, applyMiddleware, combineReducers, createStore,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {
  TypedUseSelectorHook, useSelector as useBaseSelector,
} from 'react-redux';
import appReducer from './appReducer';
import dataReducer from './dataReducer';

// Create a root reducer
const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
});

// Create a store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Update the local storage of store change
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('colorScheme', state.app.colorScheme);
});

// Define the store state type
export type State = ReturnType<typeof store.getState>

// Define the thunk dispatch type
export type Dispatch = ThunkDispatch<State, unknown, AnyAction>;

// Rewrite useSelector for thunking
export const useSelector: TypedUseSelectorHook<State> = useBaseSelector;

export default store;
