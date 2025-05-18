// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr = new Array(1, 2, 3, 4, 5)

// console.log(myArray[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // add value on first position 
// myArr.shift()

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(4)); // 3

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // 1,2,3,4,5


//slice, splice

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3)

console.log(myN1);
console.log("B ", myArr);

const myN2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myN2);




