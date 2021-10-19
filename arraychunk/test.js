const chunk = require("./index");

test("Chunk function exists", () => {
  expect(chunk).toBeDefined();
});

test("Chunk function returns chunked array", () => {
  const array = [1, 2, 3, 4];
  const size = 2;
  expect(chunk(array, size)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});
test("chunk divides an array of 3 elements with chunk size 1", () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});
