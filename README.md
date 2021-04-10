# Reddit Analytics

<p align="left">
  <img src="https://img.shields.io/github/package-json/v/rorazliev/reddit-analytics" alt="Github package.json version" />
  <img src="https://img.shields.io/github/languages/top/rorazliev/reddit-analytics" alt="GitHub top language" />
  <img alt="Code style" src="https://img.shields.io/badge/code%20style-airbnb-ff69b4">
  <img src="https://img.shields.io/github/license/rorazliev/reddit-analytics" alt="License" />
</p>

![Reddit Analytics](https://i.imgur.com/uP2k4wG.png)

**[Try it now!](https://rorazliev.github.io/reddit-analytics)**

## About

**Reddit Analytics** is a single-page React application that helps users to find the best time to post on a subreddit. After the user enter the name of the subreddit, the application fetches the corresponding data from Reddit API and displays it in a heatmap grouped by weekday and hour.

Since subreddits are like niche forums, **Reddit Analytics** can help marketing teams or individuals to promote their content.

> **Note:** the application has been primarily developed for GitHub pages. Thus, some approaches (e.g., the Search component) are appliable as long as the application is deployed on a static site hosting service.

## Highlights

- Somehow complex logic: [example code](/src/components/HeatMap/index.tsx)
- Fetching data from the Reddit API: example of [the request](/src/api/reddit.ts) and [data transformation](/src/helpers/sortPosts.ts)
- Integration tests using React Testing Library: [example code](src/components/Search/index.test.tsx)

## Usage

If you'd like to try the application, you can do it [here](https://rorazliev.github.io/reddit-analytics).

If you're a developer:

1. Download the distribution code from [here](https://github.com/rorazliev/reddit-analytics/archive/refs/tags/v1.0.0.zip) and unzip it
2. In your terminal, `cd` into the project directory
3. Run `npm i` to install all dependencies
4. Run `npm start` to start a server

> **Note:** The project utilizes `HashRouter`. If you use `BrowserRouter`, don't forget to change homepage property in `package.json`

## License

**Reddit Analytics** is an open-source project licensed under the [MIT License](LICENSE). Use it to make something cool, have fun, and share what you've learned with others.