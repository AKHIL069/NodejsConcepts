const user = {
    username: "Akhil",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "John"
// user.welcomeMessage()

// console.log(this); // {}

// function One(){
//     let username = "Akhil"
//     console.log(this.username);
// }

// One() // undefined

// const one = function(){
//     let username = "Akhil"
//     console.log(this.username);
    
// }

// one() // undefiend


const Two = () =>{
    let username = "Akhil"
    console.log(this.username);
}

// Two()

// ++++++ Basic arrow function ++++++ //

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// ++++++ Implicitly arrow function +++++++++ //

// const addTwo = (num1, num2) => (num1 + num2) 

const  addTwo = (num1, num2) => ({username: "Akhil"})

console.log(addTwo(3, 4)); 

// const myArr = [2, 3, 4, 5, 6]

// myArr.forEach(() => ())

