/* eslint-disable camelcase */

// Post Type
export type Post = {
  author: string,
  created_utc: number,
  full_link: string,
  id: string,
  num_comments: number,
  score: number,
  title: string,
}

// Response Type
export type PostResponse = {
  data: Post[]
}

// Type of Sorted Posts
export type SortedPosts = Post[][][];
