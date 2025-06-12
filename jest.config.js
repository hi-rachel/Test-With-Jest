/** @type {import("jest").Config} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "src",
  setupFilesAfterEnv: ["./testSetup.js"],
};
