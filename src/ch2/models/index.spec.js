// 테스트 환경에서는 NODE_ENV가 설정되어 있지 않음
// 테스트 커버리지 100%을 위한
// delete process.env.NODE_ENV;

beforeEach(() => {
  jest.resetModules();
});

it("models/index.js이 잘 실행된다", () => {
  const db = require("./index");
  jest.spyOn(db.Hashtag, "initiate").mockImplementation();
  jest.spyOn(db.Post, "initiate").mockImplementation();
  jest.spyOn(db.User, "initiate").mockImplementation();
  expect(db).toBeDefined();
});

it("models/index.js이 NODE_ENV가 undefined일 때도 잘 실행된다", () => {
  delete process.env.NODE_ENV;
  const db = require("./index");
  jest.spyOn(db.Hashtag, "initiate").mockImplementation();
  jest.spyOn(db.Post, "initiate").mockImplementation();
  jest.spyOn(db.User, "initiate").mockImplementation();
  expect(db).toBeDefined();
});
