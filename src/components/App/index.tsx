import React, { ReactElement, Suspense, useEffect } from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import style from './index.module.scss';
import ignoreRejection from '../../helpers/ignoreRejection';
import Home from '../../pages/Home';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';

const App: React.FC = (): ReactElement => {
  // Handle unhandled rejections
  useEffect(() => {
    window.addEventListener('unhandledrejection', ignoreRejection);
    return () => {
      window.removeEventListener('unhandledrejection', ignoreRejection);
    };
  });

  // Render
  return (
    <Router>
      <Header />
      <main className={style.main} role="main">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:subreddit" render={() => null} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App as React.FC;
