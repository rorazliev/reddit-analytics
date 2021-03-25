import React, { ReactElement, Suspense, useEffect } from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import style from './index.module.scss';
import ignoreRejection from '../../helpers/ignoreRejection';

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
      <main className={style.main} role="main">
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" render={() => null} />
            <Route exact path="/:subreddit" render={() => null} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default App as React.FC;
