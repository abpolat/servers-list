import React, { HTMLInputTypeAttribute, useState } from 'react';
import styles from './input.module.scss';

type Props = {
  label: string;
  required?: boolean;
  e2eId: string;
} & React.HTMLProps<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  label,
  required = false,
  e2eId,
  ...props
}) => {


  return (
    <label className={styles.inputLabel} data-e2e={e2eId}>
      <p>{label}</p>
      <input
        required={required}
        {...props}
      />
    </label>
  );
}
