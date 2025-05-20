const userEmail = "ak123124ai@google.com" // if string have value it means it's truthy value or if it's empty string then it's falsy value

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
    
}

// +++++++++++++++++++++++ falsy values ++++++++++++++++++++++++ //

// false, 0, -0, BigInt 0n, "", null, undefiend, NaN

// +++++++++++++++++++++++++ truthy values +++++++++++++++++++++ //

// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const obj = {}

if (Object.keys(obj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10 
// val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 15 // 10

// console.log(val1);

// Terniary Operator

// condition ? true : false 

const icePack = 100

icePack >= 80 ? console.log("More than 80") : console.log("Less than 80");

