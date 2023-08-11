import { efarsi } from "./efarsi";

export const profitShoppingCardPrice = (cart) => {
  const profitPrice = cart.reduce(
    (init, cur) => (init += cur.count * ((cur.price * cur.discount) / 100)),
    0
  );
  return efarsi(profitPrice);
};
