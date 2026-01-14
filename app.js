// let math = require("./math");

// console.log(math.sum(3, 6));
// console.log(math.product(3, 8));

let { sum, product } = require("./math");

console.log(sum(3, 6));
console.log(product(3, 8));

let person = {
  name: "abc",
};

let { name } = person;
console.log(name);
