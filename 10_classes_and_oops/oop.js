const user = {
    username: "Akhil69",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Akhil1234", 12, true)
const userTwo = new User("Nikhil9868", 11, false)
// console.log(userOne.constructor);
// console.log(userTwo);





