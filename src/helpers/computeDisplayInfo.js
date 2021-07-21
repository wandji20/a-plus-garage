const getPartDetails = (part) => {
  const { life } = part;
  const date2 = new Date();
  const date1 = new Date(part.updated_at);
  const days = Math.ceil((date2 - date1) / (1000 * 3600 * 24));
  const percentage = Math.ceil((days * 100) / life);

  switch (true) {
    case percentage > 90: {
      return {
        status: 'Excellent',
        color: '',
        percentage,
      };
    }
    case percentage > 70: {
      return {
        status: 'Good',
        color: '',
        percentage,
      };
    }
    case percentage > 50: {
      return {
        status: 'Average',
        color: '',
        percentage,
      };
    }
    case percentage > 30: {
      return {
        status: 'Poor',
        color: '',
        percentage,
      };
    }
    case (percentage > 0 && percentage <= 30): {
      return {
        status: 'Poor',
        color: '',
        percentage,
      };
    }
    default:
      return {
        status: 'Untracked',
        color: '',
        percentage,
      };
  }
};

const computeDisplayDetails = (parts) => {
  const details = parts.map((part) => getPartDetails(part));
  return details;
};

export default computeDisplayDetails;
