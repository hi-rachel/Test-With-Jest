import { obj } from "./mockFunction";

/**
 * jest.spyOn()으로 만든 mock은 테스트 간에 누적됨
 * => 테스트 라이프 사이클 이용
 * beforeAll(() => {}) 모든 테스트 실행 전
 * beforeEach(() => {}) 각각 테스트 실행 전
 * afterEach(() => {}) 각각 테스트 실행 후
 * afterAll(() => {}) 모든 테스트 실행 후
 * 또는 각 테스트에서 mockClear(), mockReset(), mockRestore() 중 1개 사용
 */

// beforeAll(() => {
//   console.log("이 파일의 준비사항 실행");
// });

// beforeEach(() => {
//   console.log("각 테스트 전에 실행됨");
// });

// afterEach(() => {
//   console.log("각 테스트 후에 실행됨");
// });

// afterAll(() => {
//   console.log("모든 테스트가 끝난 후");
// });

// describe('', () => {}) 안에 관련있는 것끼리 묶어줄 수도 있음.

afterEach(() => {
  jest.restoreAllMocks(); // spyOn, mockRestore 모두 초기화
});

test("obj.munus 함수가 1번 호출되었다. (spy 삽입)", () => {
  const minusSpy = jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  expect(minusSpy).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
  //   minusSpy.mockClear(); // 호출 횟수만 초기화, Times, With 초기화
  //   minusSpy.mockReset(); // 호출 횟수 + 구현도 초기화, mockClear + mockImplementation(() => {})
  //   minusSpy.mockRestore(); // 전부 초기화
});

// spy를 심고, 원래 함수를 실행하지 않게 하려면 (ex_DB 요청 x, 호출만 테스트)
test("obj.munus 함수에 스파이를 심고 실행도 안되게", () => {
  jest.spyOn(obj, "minus").mockImplementation(); // mockImplementation -> (() => {}); 빈 함수 실행으로 바꿔버림
  obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(obj.minus).not.toBe(-1); // ERROR
});

test("obj.munus 함수에 스파이를 심고 리턴 값을 바꾸게", () => {
  jest.spyOn(obj, "minus").mockImplementation((a, b) => a + b); // 요청 바꾸는 것 가능
  const result = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).not.toBe(-1);
  expect(result).toBe(3);
});

test("obj.munus 함수에 스파이를 심고 리턴 값이 서로 다르게 나오게", () => {
  jest
    .spyOn(obj, "minus")
    .mockImplementationOnce((a, b) => a + b) // 한 번만 변경
    .mockImplementationOnce(() => 5);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(3);
  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(-1);
});

test("obj.munus 함수에 스파이를 심고 리턴 값이 다르게 나오게 (mockReturnValue)", () => {
  jest.spyOn(obj, "minus").mockReturnValue(5); // 함수 내부 구현 변경하지 않고 최종 리턴 값만 변경
  const result1 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result1).toBe(5);
});

test("obj.munus 함수에 스파이를 심고 리턴 값이 다르게 나오게 (mockReturnValueOnce)", () => {
  jest
    .spyOn(obj, "minus")
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(3)
    .mockReturnValue(8);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(3);
  expect(result1).toBe(5);
  expect(result2).toBe(3);
  expect(result3).toBe(8);
});

/**
 * 테스트 잠깐 미루기
 * test.skip() -> 급하게 커밋해야 할 때 등 사용
 * describe.skip()
 * 혹은 xit(), xtest() 사용
 * it() = test() 표현 동일
 * test.todo('나중에 만들어야지~')
 */
