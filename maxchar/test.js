const maxChar = require("./index");

test("maxChar function exists", () => {
  expect(maxChar).toBeDefined();
});
test("Hello word must return l", () => {
  expect(maxChar("Hello")).toBe("l");
});
test("1234555hello word must return 5", () => {
  expect(maxChar("1234555hello")).toBe("5");
});
test("1122 word must return 5", () => {
  expect(maxChar("1122")).toBe("1");
});
