// Singleton
// Object.create

// object literals

const mySmb = Symbol("Key1")

const JsUser = {
    name: "Akhil",
    age: 25,
    [mySmb]: "SymbolData",
    location: "Delhi",
    email: "akhilrajput12312@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser[mySmb]);

JsUser.isLoggedIn = true // value override

// Object.freeze(JsUser)

JsUser.email = "ak1234rajput@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello everyone for wathcing this concept");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




