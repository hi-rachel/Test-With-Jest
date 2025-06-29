/** @type {import("jest").Config} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: ".",
  setupFilesAfterEnv: ["./src/testSetup.js"],
};
