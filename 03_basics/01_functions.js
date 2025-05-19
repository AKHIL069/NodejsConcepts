function sayMyName(){
    console.log("Akhil");
    
}

// sayMyName => // function reference
// sayMyName() => // function execution
// sayMyName() 

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 4) // 7
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


// function addTwoNumbers(num1, num2){
//     // let result = num1 + num2
//     // return result
//     return num1 + num2
// }

// const res = addTwoNumbers(8, 4)

// console.log("Result:", res);


function loginUserMessage(username = "John"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// const res = loginUserMessage("Akhil") // Akhil just logged in
const res = loginUserMessage() // undefined just logged in
console.log(res);
