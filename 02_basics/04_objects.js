// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object
tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const instaUser  = {
    email: "akhilrajput1234@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Akhil",
            lastName: "Kumar"
        }
    }
}

// console.log(instaUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "ak12345rajput@mgial.com",
        username: "Akhil123"
    },
    {
        id: 2,
        email: "nk345rajput@mgial.com",
        username: "Nikhil9868"
    },
    {
        id: 3,
        email: "saransh5rajput@mgial.com",
        username: "Saransh9825"
    },
    {
        id: 4,
        email: "deepdown1234@mgial.com",
        username: "Deep2352"
    },
    {
        id: 5,
        email: "sunilji1094@mgial.com",
        username: "Sunil3452"
    }
]

// console.log(users[1].email); 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggesIn' ]
// console.log(Object.values(tinderUser)); // [ '123', 'Sammy', false ]
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty("isLogged")); // false



const course = {
    courseName: "Js Course",
    price: "999",
    courseInstructor: "Akhil"
}

// course.courseInstructor

const {courseName: name, price, courseInstructor: instructor} = course
console.log(name);

// {
//     "name": "Akhil",
//     "courseName": "Js Course",
//     "price": "free"
// }


