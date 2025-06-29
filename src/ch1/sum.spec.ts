import { sum } from "./sum";

// toBe 는 값을 비교할 때 사용
test("sum 함수는 두 숫자를 더해야 한다", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(5);
});
