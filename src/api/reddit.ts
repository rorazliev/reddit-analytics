import dayjs from 'dayjs';

// Base URL for API calls
export const baseURL = 'https://api.pushshift.io/reddit';

// Base URL for a user link
export const userURL = 'https://reddit.com/user';

/**
 * Fetch posts posted on a given subreddit
 * @param {string} subreddit
 * @returns {Promise<Response>}
 */
export const fetchData = (
  subreddit: string,
): Promise<Response> => {
  // Calculate a start date
  const start = dayjs().subtract(1, 'years').unix();
  const posts = 100;

  return fetch(
    `${baseURL}/submission/search/?subreddit=${subreddit}&after=${start}&size=${posts}&sort=desc&sort_type=score`,
  );
};
