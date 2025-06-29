// 캐시 삭제
// beforeEach(() => {
//   jest.resetModules();
// });

// 테스트간 간섭 끊기
// it.only 사용시 only를 제외하면 나머지 skip

// JS에서는 모듈을 한 번 import시 그 모듈이 캐싱되어 있음
it("first import", async () => {
  const c = await import("./mockClass");
  (c as any).prop = "hello";
  expect(c).toBeDefined();
});

it("second import", async () => {
  const c = await import("./mockClass");
  expect((c as any).prop).toBe("hello");
});
