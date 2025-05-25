// let myName = "Akhil       "
// let myPass = "Ak312324    "

// console.log(myName.trueLength);




let myHeros = ["Thor", "Superman", "Spiderman"]


let heroPower = {
    Thor: "hammer",
    Superman: "fly",
    Spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.Spiderman}`);
    }
}

Object.prototype.winner = function(){
    console.log(`Winner is present in all objects`);
}

Array.prototype.losser = function(){
    console.log(`Losser present here for new update.`);
    
}

// heroPower.winner()
myHeros.winner()
myHeros.losser()
// heroPower.losser()  // not possible for this

const user = {
    name: "Akhil",
    email: "ak12345rj@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// ++++++++++ Modern syntax +++++++++++++++ //

Object.setPrototypeOf(teachingSupport, teacher)


let anotherUserName = "Akhilrajput                 "

String.prototype.trueLength = function (){
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"akhilkumar".trueLength()
"iceTea".trueLength()