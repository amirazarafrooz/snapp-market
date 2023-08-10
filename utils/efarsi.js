export const efarsi = (x, type) => {
  return x.toLocaleString("ar-EG");
  //   switch (type) {
  //     case "default":
  //       return x.toLocaleString("ar-EG");
  //     case "millionprice":
  //       return x.toLocaleString("ar-EG");
  //     case "normalprice":
  //       return x.toLocaleString("ar-EG", {
  //         minimumFractionDigits: 0,
  //       });
  //   }
  //   if (x < 10e6)
  //     return x.toLocaleString("ar-EG", {
  //       minimumFractionDigits: 3,
  //     });
  //   else return x.toLocaleString("ar-EG");
};
