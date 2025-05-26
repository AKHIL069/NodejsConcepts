const desc = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(desc);


// console.log(Math.PI);

const myObj = {
    name: "Akhil",
    age: 19,
    phone: 9872385623,
    isAvailable: true,

    addNew: function () {
        console.log("Add new value for myObj.")
    }
}

// console.log(myObj);
// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

Object.defineProperty(myObj, "name", {writable: false, enumerable: false})

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

for (let [key, value] of Object.entries(myObj)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}