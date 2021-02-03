import { format } from 'date-fns';

export default function DateFormatter({ dateString }) {
  return <time dateTime={dateString}>{format(dateString, 'LLLL d, yyyy')}</time>;
}
