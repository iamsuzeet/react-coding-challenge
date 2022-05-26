export const formatNumberToK = (num) => {
  return Math.abs(num) > 999
    ? (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.abs(num);
};
