import { obj } from "./toStrictEqual";

// 객체 비교시에는 toStrictEqual 사용
test("obj 함수는 객체를 반환해야 한다", () => {
  expect(obj()).toStrictEqual({ a: "hello" });
});

test("배열끼리도 toStrictEqual 써야한다", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});
