const palindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed ? true : false;
};
module.exports = palindrome;
