const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

export const isFormEmpty = (fields) => {
  return Object.values(fields)
    .map((item) => isEmpty(item))
    .every((item) => item === true);
};
