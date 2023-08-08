export const amountProducts = (cart) => {
  return cart.reduce((init, cur) => (init += cur.count), 0);
};
