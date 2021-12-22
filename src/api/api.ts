import axios, { AxiosPromise } from 'axios';
import dayjs from 'dayjs';
import { ServerResponse } from '../types/types';

// Base URL for API calls
export const baseURL = 'https://api.pushshift.io/reddit';

// Base URL for user links
export const userURL = 'https://reddit.com/user';

// Create an axios instance
const api = axios.create({
  baseURL,
});

/**
 * Fetch data from the server
 * @param {string} subreddit
 * @returns {AxiosPromise<ServerResponse>}
 */
export const fetch = (subreddit: string): AxiosPromise<ServerResponse> => {
  const start = dayjs().subtract(1, 'years').unix();
  const posts = 500;

  // Return the API call
  return api.get(
    `${baseURL}/submission/search/?subreddit=${subreddit}&after=${start}&size=${posts}&sort=desc&sort_type=score`,
  );
};
