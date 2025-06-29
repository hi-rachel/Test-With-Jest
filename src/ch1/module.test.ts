import { obj } from "./module";
import axios from "axios";

// jest.mock은 호이스팅 됨, 맨 위에 작성 추천
// => 호이스팅을 원하지 않으면 spyOn 사용
// 파일 전체를 모킹하고 싶으면 __mocks__ 폴더에 모킹 파일 생성

jest.mock("axios");

jest.mock("./module", () => {
  return {
    // 원본을 가져옴
    ...jest.requireActual("./module"),
    obj: {
      ...jest.requireActual("./module").obj,
      method3: jest.fn(),
    },
  };
});

// jest.mock("./module", () => {
//   return {
//     // obj: { a: "b" },
//     prop: "hello",
//   };
// });

// 함수나 메서드 수정시 spyOn 사용
// 프로퍼티 수정시 replaceProperty 사용

test("모듈을 전부 모킹", () => {
  //   jest.spyOn(obj, "method3");
  jest.replaceProperty(obj, "prop", "replaced");
  //   console.log(obj);
});

test("axios를 전부 모킹", () => {
  //   console.log(axios);
});
