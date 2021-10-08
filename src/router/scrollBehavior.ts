import emitter from "tiny-emitter/instance";

export default function (to, from, savedPosition): any {
  return new Promise((resolve) => {
    // If same route, do not scroll
    if (to.path === from.path) return false;

    if (savedPosition) {
      emitter.once("pageReady", () => {
        resolve(savedPosition);
      });
    } else {
      emitter.once("pageReady", () => {
        resolve({ top: 0, left: 0 });
      });
    }
  });
}
