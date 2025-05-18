const name = "Akhil"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Akhil rajput")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); // 12

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // i


const updateString = gameName.substring(0, 3)
console.log(updateString); // Akh

const newString = gameName.slice(1, 3) // kh
console.log(newString);

console.log(gameName.trim());



