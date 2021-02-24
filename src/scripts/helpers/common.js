import { DateFormat } from '../consts';

const addLeadingZero = (value) => {
  return String(value).padStart(2, '0');
};

const formatDate = (date, format = DateFormat.VIEW) => {
  if (!date) {
    throw new Error('The date is not valid');
  }

  switch (format) {
    case DateFormat.VIEW:
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
    case DateFormat.VALUE:
      const month = addLeadingZero(date.getMonth() + 1);
      const day = addLeadingZero(date.getDate());

      return `${date.getFullYear()}-${month}-${day}`;
  }
};

const getIsExpired = (date) => {
  if (date === null) {
    return false;
  }

  return new Date().getMinutes() > date.getMinutes();
};

export { formatDate, getIsExpired };
