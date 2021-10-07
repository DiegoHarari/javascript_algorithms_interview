const reverse = (str) => {
  debugger;
  str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
};
reverse("sdfds");
module.exports = reverse;

// solution 1
// return str.split("").reverse().join("");

// solution 2
// let reversed = "";
// for (let char of str) {
//   reversed = char + reversed;
// }
// return reversed;
