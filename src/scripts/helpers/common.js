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

export { formatDate };
