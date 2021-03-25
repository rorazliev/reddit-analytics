import React, { ReactElement, useEffect } from 'react';
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
  return <div />;
};

export default App as React.FC;
