import { customeError, CustomError, error } from "./throwFunction";

// expect(error())로 작성하면 error가 발생해 toThrow가 실행되지 않음
// error를 함수로 한 번 감싸서 실행
test("error가 잘 난다", () => {
  expect(() => error()).toThrow(Error);
  expect(() => customeError()).toThrow(CustomError);
});

test("error가 잘 난다(try/catch)", () => {
  try {
    error();
  } catch (err) {
    // err는 객체이므로 toStrictEqual 사용
    expect(err).toStrictEqual(new Error());
  }
});
