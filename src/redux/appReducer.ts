/* eslint-disable default-param-last */
import { AnyAction } from 'redux';
import { Dispatch } from './store';

// Get a color scheme from a local storage
let colorScheme: string = localStorage.getItem('colorScheme') || '';

// If the value wasn't set up before
if (localStorage.length === 0) {
  // Get the current hour
  const date = new Date();
  const hour = date.getHours();
  // Select a color sheme based on the hour
  colorScheme = hour > 7 && hour < 19 ? 'light' : 'dark';
  localStorage.setItem('colorScheme', colorScheme);
}

// Define the state type
type State = {
  colorScheme: string,
}

// Create the initial state
const initialState: State = {
  colorScheme,
};

/**
 * App reducer function
 * @param {State} state
 * @param {AnyAction} action
 * @returns {State}
 */
const appReducer = (
  state: State = initialState,
  action: AnyAction,
): State => {
  switch (action.type) {
    case 'APP/SET_COLOR_SCHEME':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

/**
 * Set a color scheme
 * @param {string} colorScheme
 * @returns {void}
 */
export const setColorScheme = (
  colorScheme: string,
) => (dispatch: Dispatch): void => {
  dispatch({
    type: 'APP/SET_COLOR_SCHEME',
    payload: {
      colorScheme,
    },
  });
};

export default appReducer;
