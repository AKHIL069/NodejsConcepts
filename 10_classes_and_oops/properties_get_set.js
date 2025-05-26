function User(email, password){
    this._email = email;
    this_password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'pasword', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const akhil = new User("akhil8y235kumar@gmail.com", "8923642")
console.log(akhil.email);
