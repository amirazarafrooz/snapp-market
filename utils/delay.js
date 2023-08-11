export default function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}
