export function okPromise() {
  return Promise.resolve("ok");
}

export function noPromise() {
  return Promise.reject("no");
}

// async는 자동으로 Promise로 감싸서 반환
export async function okAsync() {
  return "ok";
}

export async function noAsync() {
  throw "no";
}
