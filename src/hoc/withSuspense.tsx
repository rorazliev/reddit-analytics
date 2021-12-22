/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, Suspense } from 'react';
import Loader from '../components/Loader';

export function withSuspense<T>(Component: ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}
