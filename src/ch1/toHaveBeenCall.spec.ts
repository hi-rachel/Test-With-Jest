import { sum, obj } from "./toHaveBeenCall";

// 함수가 호출되었는지 확인할 때 사용, 실제로 잘 사용 x
test("sum 함수가 호출되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled();
});

// 함수가 몇 번 호출되었는지 확인할 때 사용
test("sum 함수가 1 번 호출되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("sum 함수가 1, 2와 함께 호출되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

// test 이름을 겹치지 않게 하는 것이 좋음
test("obj.munus 함수가 1번 호출되었다. (spy함수 생성)", () => {
  const minusSpy = jest.fn(obj.minus);
  minusSpy(1, 2);
  //   console.log(obj.minus); //  [Function: minus]
  expect(minusSpy).toHaveBeenCalledTimes(1);
});

test("obj.munus 함수가 1번 호출되었다. (spy 삽입)", () => {
  const minusSpy = jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  //   console.log(obj.minus); //  [Function: mockConstructor]
  expect(minusSpy).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});
