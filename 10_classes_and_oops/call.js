function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("Called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const ak = new createUser("Akhil9868", "ak1234kumar@gmail.com", "Ak234234")
console.log(ak);

