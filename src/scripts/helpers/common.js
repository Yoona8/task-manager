const formatDate = (date) => {
  if (!date) {
    throw new Error('The date is not valid');
  }

  const options = {
    month: 'short',
    day: '2-digit',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  };

  return date.toLocaleDateString('en-US', options);
};

const getIsExpired = (date) => {
  if (date === null) {
    return false;
  }

  return new Date().getMinutes() > date.getMinutes();
};

export { formatDate, getIsExpired };
