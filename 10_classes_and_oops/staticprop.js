class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const akhil = new User("Akhil2352")
// console.log(akhil.createId())


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone15", "apple.in@gmail.com")
// console.log(iphone.createId());

