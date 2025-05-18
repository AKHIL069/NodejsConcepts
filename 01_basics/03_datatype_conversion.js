let score = "33abc"
let marks = null
let sum = undefined
let approved = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number
console.log(valueInNumber); // NaN

let marksInNumber = Number(marks)
console.log(typeof marksInNumber) // number
console.log(marksInNumber) // 0

let sumInNumber = Number(sum)
console.log(typeof sumInNumber) // number
console.log(sumInNumber) // NaN

let approvedInNumber = Number(approved)
console.log(typeof approvedInNumber) // number
console.log(approvedInNumber) // 1

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0

let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn); // false

// 1 => true; 0 => false 
// "" => false
// "akhil" => true

let boot = 3
let bootInString = String(boot)
console.log(typeof bootInString); // string
console.log(bootInString); // 3

// 3 => 3
// true => true; false => false