import { efarsi } from "./efarsi";

export const itemCalculatePrice = (price, discount) => {
  const Price = (price * (100 - discount)) / 100;
  return efarsi(Price);
};
