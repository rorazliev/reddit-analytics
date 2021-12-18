export type Post = {
  author: string,
  created_utc: number,
  full_link: string,
  id: string,
  num_comments: number,
  score: number,
  title: string,
}

export type ServerResponse = {
  data: Post[],
}

export type SortedPosts = Post[][][];
