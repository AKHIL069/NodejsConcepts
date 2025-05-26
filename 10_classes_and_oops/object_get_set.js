const User = {
    _email: "akhil8234rajput@gmail.com",
    _password: "akgh234",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const akhil = Object.create(User)
console.log(akhil.email);
