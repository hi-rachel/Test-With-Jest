import { timer, timerPromise } from "./callback";

// callback 함수 테스트 추천 x, 전부 Promise로 변경 추천
// test("타이머 잘 실행되나?", (done) => {
//   timer((message: string) => {
//     expect(message).toBe("fail");
//     done();
//   });
// });

// test("타이머가 성공 메시지를 반환하는가?", async () => {
//   const message = await timerPromise();
//   expect(message).toBe("success");
// });

test("시간아 빨리가라!", (done) => {
  expect.assertions(1); // expect가 실행된 횟수를 검증
  jest.useFakeTimers(); // runAllTimers 사용시 필수
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
  jest.runAllTimers(); // 가짜 타이머(faked timers)를 통해 모든 타이머(setTimeout, setInterval 등)를 즉시 실행
  jest.advanceTimersByTime(10_000); // 10초 흐르게
});
