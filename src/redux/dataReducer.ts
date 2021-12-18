/* eslint-disable default-param-last */
import { AxiosPromise } from 'axios';
import { AnyAction } from 'redux';
import * as api from '../api/api';
import { ServerResponse, SortedPosts } from '../types/types';
import sortPosts from '../utils/sortPosts';
import { Dispatch } from './store';

// Define the state type
type State = {
  posts: SortedPosts,
  isFetching: boolean,
  isError: boolean,
}

// Create the initial state
const initialState = {
  posts: [] as SortedPosts,
  isFetching: true,
  isError: false,
};

/**
 * Data reducer function
 * @param {State} state
 * @param {AnyAction} action
 * @returns {State}
 */
const dataReducer = (
  state: State = initialState,
  action: AnyAction,
): State => {
  switch (action.type) {
    case 'DATA/SET_ERROR_STATE':
    case 'DATA/SET_FETCHING_STATE':
    case 'DATA/SET_DATA':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

// The collection of action creators
const actions = {
  setError: (state: boolean) => ({
    type: 'DATA/SET_ERROR_STATE',
    payload: {
      isError: state,
    },
  }),

  setIsFetching: (state: boolean) => ({
    type: 'DATA/SET_FETCHING_STATE',
    payload: {
      isFetching: state,
    },
  }),

  setData: (data: SortedPosts) => ({
    type: 'DATA/SET_DATA',
    payload: {
      posts: data,
    },
  }),
};

/**
 * Fetch and set data
 * @param {string} name
 * @returns {void}
 */
export const fetch = (name: string) => (dispatch: Dispatch): void => {
  const promise: AxiosPromise<ServerResponse> = api.fetch(name);

  promise.then((response) => {
    // Check whether data is valid
    if (response.data.data.length === 0) {
      throw Error;
    }

    const sorted = sortPosts(response.data.data);
    dispatch(actions.setData(sorted));
    dispatch(actions.setIsFetching(false));
  }).catch(() => {
    dispatch(actions.setError(true));
  });
};

/**
 * Reset the state
 * @returns {void}
 */
export const reset = () => (dispatch: Dispatch): void => {
  dispatch(actions.setError(false));
  dispatch(actions.setIsFetching(true));
  dispatch(actions.setData([] as SortedPosts));
};

export default dataReducer;
