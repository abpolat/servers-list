import React from 'react';
import styles from './loading.module.scss';

export const Loading = () => (
  <div className={styles.ldsRing}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
