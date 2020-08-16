export default function swDevelopment() {
  let swUrl = `${process.env.PUBLIC_URL}/serviceWorkerDev.js`;
  navigator.serviceWorker.register(swUrl).then((res) => {});
}
