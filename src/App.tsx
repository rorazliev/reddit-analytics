import React, { lazy, ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  Navigate, HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyle } from './globalStyle';
import { withSuspense } from './hoc/withSuspense';
import HomePage from './pages/HomePage';
import store, { useSelector } from './redux/store';

// Lazy load the subreddit page
const SubredditPage = lazy(() => import('./pages/SubredditPage'));
const SuspendedPage = withSuspense(SubredditPage);

// Ignore an unhandled rejection
const ignoreRejections = (event: PromiseRejectionEvent): void => {
  event.preventDefault();
};

// Create a container for content
const Content = styled.div`
  flex: 1;
`;

const App: React.FC = (): ReactElement => {
  // Prevent the app from crashing due to unhandled rejections
  useEffect(() => {
    window.addEventListener('unhandledrejection', ignoreRejections);
    return () => {
      window.removeEventListener('unhandledrejection', ignoreRejections);
    };
  }, []);

  // Get a color scheme indicator
  const isLight = useSelector((state) => state.app.colorScheme === 'light');

  // Render
  return (
    <Router>
      <GlobalStyle isLight={isLight} />
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:name" element={<SuspendedPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Content>
      <Footer />
    </Router>
  );
};

// Wrap the app in the store provider
const AppContainer: React.FC = (): ReactElement => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
