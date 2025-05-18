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
