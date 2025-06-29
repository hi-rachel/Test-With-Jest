import { after3days } from "./date";

// https://jestjs.io/docs/jest-object#jestgetrealsystemtime

test("3일 후를 리턴한다", () => {
  jest.useFakeTimers().setSystemTime(new Date(2024, 3, 9));
  expect(after3days()).toStrictEqual(new Date(2024, 3, 12));
});

// 한 번 설정하면 같은 파일 내의 모든 테스트에 영향을 줄 수 있으므로 관리에 주의
// jest.useFakeTimers() -> jest.useRealTimers() 되돌려주기
afterEach(() => {
  jest.useRealTimers();
});

/** 부동 소수점 문제
 *  Expected: 0.3
    Received: 0.30000000000000004
 */
// test("0.1 + 0.2는 0.3", () => {
//   expect(0.1 + 0.2).toBe(0.3);
// });

test("0.1 + 0.2는 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
