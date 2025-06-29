export function timer(callback) {
  setTimeout(() => {
    callback("success");
  }, 1000);
}

export function timerPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 10_000);
  });
}
