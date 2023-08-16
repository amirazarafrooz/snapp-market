import { efarsi } from "./efarsi";

export const finalShoppingCardPrice = (cart) => {
  const price = cart.reduce(
    (init, cur) =>
      (init += cur.discount
        ? cur.count * (cur.price * ((100 - cur.discount) / 100))
        : cur.count * cur.price),
    0
  );
  return price;
};
