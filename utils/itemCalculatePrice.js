export const itemCalculatePrice = (price, discount) => {
  const Price = (price * (100 - discount)) / 100;
  return Price.toFixed(3);
};
