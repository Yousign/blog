import { format } from 'date-fns';
import React from 'react';

export const DateFormatter: React.VFC<{ dateString: string }> = ({ dateString }) => {
  return <time dateTime={dateString}>{format(new Date(dateString), 'LLLL d, yyyy')}</time>;
};
