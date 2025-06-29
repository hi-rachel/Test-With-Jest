import { noAsync, noPromise, okAsync, okPromise } from "./asyncFunction";

/**
 * Promise test 각 3가지 방법
 * 성공
 * 1. resolves
 * 2. then
 * 3. async await
 *
 * 실패
 * 1. rejects
 * 2. catch
 * 3. async await catch
 */

test("okPromise 테스트", () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  // Promise.resolve 사용시 앞에 return을 붙여줘야 테스트 올바르게 진행됨
  return expect(okSpy()).resolves.toBe("ok");
});

test("okPromise 테스트2", () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

// async, await 사용시 return, resolves 필요 x
test("okPromise 테스트3", async () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  const result = await okSpy();
  expect(result).toBe("ok");
});

test("okAsync 테스트", () => {
  expect.assertions(1);
  const okSpy = jest.fn(okAsync);
  // Promise.resolve 사용시 앞에 return을 붙여줘야 테스트 올바르게 진행됨
  return expect(okSpy()).resolves.toBe("ok");
});

test("okAsync 테스트2", () => {
  expect.assertions(1);
  const okSpy = jest.fn(okAsync);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

// async, await 사용시 return, resolves 필요 x
test("okAsync 테스트3", async () => {
  expect.assertions(1);
  const okSpy = jest.fn(okAsync);
  const result = await okSpy();
  expect(result).toBe("ok");
});

test("noPromise 테스트", () => {
  expect.assertions(1);
  const noSpy = jest.fn(noPromise);
  return expect(noSpy()).rejects.toBe("no");
});

test("noPromise 테스트2", () => {
  expect.assertions(1);
  const noSpy = jest.fn(noPromise);
  return noSpy().catch((result) => {
    expect(result).toBe("no");
  });
});

test("noPromise 테스트3", async () => {
  expect.assertions(1);
  const noSpy = jest.fn(noPromise);
  try {
    const result = await noSpy();
  } catch (err) {
    expect(err).toBe("no");
  }
});

test("noAsync 테스트", () => {
  const noSpy = jest.fn(noAsync);
  return expect(noSpy()).rejects.toBe("no");
});

test("noAsync 테스트2", () => {
  expect.assertions(1);
  const noSpy = jest.fn(noAsync);
  return noSpy().catch((result) => {
    expect(result).toBe("no");
  });
});

test("noAsync 테스트3", async () => {
  expect.assertions(1);
  const noSpy = jest.fn(noAsync);
  try {
    const result = await noSpy();
  } catch (err) {
    expect(err).toBe("no");
  }
});

// mockResolvedValue, mockRejectedValue 예시
// import * as fns from "./asyncFunction";

// test("okPromise 테스트", () => {
//   //   jest.spyOn(fns, "okPromise").mockReturnValue(Promise.resolve("no"));
//   jest.spyOn(fns, "okPromise").mockResolvedValue("no");
//   return expect(fns.okPromise()).resolves.toBe("no");
// });

// test("noPromise 테스트", () => {
//   //   jest.spyOn(fns, "noPromise").mockReturnValue(Promise.reject("no"));
//   jest.spyOn(fns, "noPromise").mockRejectedValue("no");
//   return expect(fns.noPromise()).rejects.toBe("no");
// });
