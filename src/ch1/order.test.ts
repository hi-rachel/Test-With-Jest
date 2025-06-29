import { first, second, third } from "./order";

// 호출 순서 테스트
test("first->second->third", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(third);
  (spy1 as any)("hello"); // calls 안에 들어감
  spy1();
  spy2();
  spy3();
  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
    spy2.mock.invocationCallOrder[0]
  );
  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
    spy2.mock.invocationCallOrder[0]
  );
});

test("first->second->third", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(third);
  (spy1 as any)("hello"); // calls 안에 들어감
  spy1();
  spy2();
  spy3();
  // 가독성을 위해 jest-extended matchers 사용
  expect(spy1).toHaveBeenCalledBefore(spy2);
  expect(spy3).toHaveBeenCalledAfter(spy2);
});

test("인수 테스트", () => {
  const fn = jest.fn();
  fn({
    a: {
      b: {
        c: "hello",
      },
      d: "bye",
    },
    e: ["f"],
  });
  expect(fn).toHaveBeenCalledWith({
    a: {
      b: {
        c: "hello",
      },
      d: "bye",
    },
    e: ["f"],
  });
});

test("인수의 일부 테스트", () => {
  const fn = jest.fn();
  fn({
    a: {
      b: {
        c: "hello",
      },
      d: "bye",
    },
    e: ["f"],
  });
  // 인수의 가장 중요한 속성 추려서 테스트 추천
  expect(fn.mock.calls[0][0].a.b.c).toBe("hello");
});
