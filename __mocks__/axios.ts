export default {
  // 원본을 그대로 쓰면서 바꾸고 싶은 것만 바꿀 수 있음
  ...jest.requireActual("axios"),
  haha: "통째로 바꿈",
};
