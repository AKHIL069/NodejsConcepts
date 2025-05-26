// ES6 

class User {
    constructor(username, email, phone, password) {
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const akhil = new User("Akhil9868", "ak12345kumar@gmail.com", "98258235232", "AKhil1234")
// console.log(akhil.encryptPassword());
// console.log(akhil.changeUserName());

// +++++++++++++++++ Behind the scence ++++++++++++++++++++++ //

function UserTwo(username, email, phone, password){
    this.username = username
    this.email = email; 
    this.phone = phone; 
    this.password = password;
}

UserTwo.prototype.encryptPassword = function(){
    console.log("encrypted 2");
    
    return `${this.password}abc`
}

UserTwo.prototype.changeUserName = function(){
    console.log("changename 2");
    
    return `${this.username.toUpperCase()}`
}

const nikhil = new UserTwo("nikhil24", "nikhil12312@gmail.com", "23143245123", "nk1231245")

console.log(nikhil.encryptPassword());
console.log(nikhil.changeUserName());

