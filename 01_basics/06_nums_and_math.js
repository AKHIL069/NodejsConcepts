const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNum = 123.43562

// console.log(otherNum.toPrecision(3)); // 123

const hun = 10000000
// console.log(hun.toLocaleString('en-IN'));

// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++ //

// console.log(Math);
// console.log(Math.abs(-4)); // 4 (to change negative value to positive only)
// console.log(Math.round(4.3)); // 4 
// console.log(Math.ceil(45.64)); // 46
// console.log(Math.floor(4.9)); // 4
// console.log(Math.sqrt(25)); // 5
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8
console.log(Math.random()); // random number between 0 to 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)






