// Primitive (call by value)
// 7 types : String, Number, Boolean, null, undefiend, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false


const bigNum = 2342343722232323n

console.log(typeof bigNum); // bigint



// Non primitive (call by reference)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Akhil",
    age: 25,
    email: "akhilrajput2123@gmail.com"
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof heros); 


// ++++++++++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myDetails = "Akhilrajput"

let myFun = myDetails
myDetails = "Nikhilrajput"

console.log(myFun);
console.log(myDetails);

let user1 = {
    email: "user123@gmail.com",
    upi: "user@sbi"
}

let user2 = user1

user2.email = "user345345@yahoo.com"

console.log(user1.email);
console.log(user2.email);

