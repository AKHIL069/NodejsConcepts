class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const akhil = new Teacher("Akhil9868", "ak123214rj@gmail.com", "Akhilsdf438y")

akhil.addCourses()
akhil.logMe()

const nikhil = new User("NIKHIL23985")
// nikhil.addCourses()

nikhil.logMe()

console.log(akhil instanceof User);
