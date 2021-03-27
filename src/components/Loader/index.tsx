import React, { ReactElement } from 'react';
import style from './index.module.scss';

const Loader: React.FC = (): ReactElement => (
  <div className={style.container}>
    <div className={style.spinner} />
  </div>
);

export default Loader as React.FC;
