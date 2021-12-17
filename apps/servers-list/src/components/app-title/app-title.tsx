import React from 'react';

export type AppTitleProps = {
  title: string;
  e2eId: string;
  extraClasses?: string;
};

export const AppTitle: React.FC<AppTitleProps> = ({
  title,
  e2eId,
  extraClasses,
}) => (
  <h1 data-e2e={e2eId} className={extraClasses || ''}>
    {title}
  </h1>
);
