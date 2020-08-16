export default function swProduction() {
  let swUrl = `${process.env.PUBLIC_URL}/serviceWorkerProduction.js`;
  navigator.serviceWorker.register(swUrl).then((res) => {});
}
