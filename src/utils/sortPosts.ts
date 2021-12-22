import dayjs from 'dayjs';
import { Post, SortedPosts } from '../types/types';

/**
 * Sort given posts by weekday and hour
 * @param {Post[]} posts
 * @returns {SortedPosts}
 */
const sortPosts = (posts: Post[]): SortedPosts => {
  // Create an array for sorted posts
  const sorted: SortedPosts = new Array<number>(7).fill(0).map(
    () => new Array<number>(24).fill(0).map(() => [] as Post[]),
  );

  // Iterate posts and sort by weekday and hour
  posts.forEach((post, index) => {
    const time = dayjs.unix(posts[index].created_utc);
    const weekday = time.day();
    const hour = time.hour();
    sorted[weekday][hour].push(post);
  });

  return sorted;
};

export default sortPosts;
