// +++++++++++++++++++ if statement +++++++++++++++++++++++++++++ // 

const isUserLoggedIn = true
const temp = 41

if (temp < 50){
    console.log("No Heat waves yet");
}
// console.log("Heat waves start...."); 


// < - Less than 
// > - Greater than
// <= - Less or equal to
// >= - Greater or equal to
// == - Equal to
// != - Not equal to 
// === - Strict equal to
// !== - Strict not equal to


// +++++++++++++++++++++ if else statement +++++++++++++++++++++++++++ //

const marks = 69
if (marks >= 70){
    console.log(`Passed with ${marks} marks only.`);
} else{
    console.log(`Failed with ${marks} marks only.`);   
}


// +++++++++++++++++++++ short hand notation +++++++++++++++++++++++++ //

const balance = 1000

if (balance > 500) console.log("sufficent balance"); // Implicitly scope

// ++++++++++++++++++++++ nesting statements ++++++++++++++++++++++++ //

const accBalance = 1000

if (accBalance < 500){
    console.log("Sufficient amount too low");
} else if (accBalance < 750){
    console.log("Sufficient amount is average");
} else if (accBalance < 900){
    console.log("Sufficient balance is good");
} else{
    console.log("Sufficient balance is Excellent");
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in successfully....");
}

