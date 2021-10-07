const palindrome = require("./index");

test("Palindrome function exists", () => {
  expect(palindrome).toBeDefined();
});
test("Word is a Palindrome", () => {
  expect(palindrome("eye")).toBe(true);
});
test("Word is a Palindrome", () => {
  expect(palindrome("racecar")).toBe(true);
});
test("Word is not a Palindrome", () => {
  expect(palindrome("hello")).toBe(false);
});
