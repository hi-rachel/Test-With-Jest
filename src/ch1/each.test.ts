/**
 * 테스트 중복 줄이기 - each
 */

it.skip("1 더하기 1은 2", () => {
  expect(1 + 1).toBe(2);
});

it.skip("2 더하기 3은 5", () => {
  expect(2 + 3).toBe(5);
});

it.skip("3 더하기 4은 7", () => {
  expect(3 + 4).toBe(7);
});

it.each([
  [1, 1, 2],
  [2, 3, 5],
  [3, 4, 7],
])("%i 더하기 %i은 %i", (a, b, c) => {
  expect(a + b).toBe(c);
});
