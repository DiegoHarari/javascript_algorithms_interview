const maxChar = (str) => {
  let maxChar = "";
  let max = 0;
  let obj = {};
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxChar;

const hello = maxChar("Hello");
const pedo111132 = maxChar("pedo1111322222222");

console.log(pedo111132);
