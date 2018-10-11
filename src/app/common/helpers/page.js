export const getCurrent = ({skip, limit}) => {
  if(!limit) {
    return 1;
  }

  return Math.floor(skip / limit) + 1;
};

export const getSkip = ({page, pageSize, total}) => {
  if(page * pageSize > total) {
    return Math.floor(total / pageSize) * pageSize;
  } else if(!page) {
    return 0;
  }

  return (page - 1) * pageSize;
};
