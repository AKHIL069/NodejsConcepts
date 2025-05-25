// +++++++++++++++++++++++ Promise 1 ++++++++++++++++++++++++++ //

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task - DB calls, cryptography, network

    setTimeout(() => {
        // console.log('Async task is complete'); 
        resolve()
    }, 1000);
})

promiseOne.then(()=>{
    // console.log('Promise Consumed');
})

// +++++++++++++++++++++++ Promise 2 ++++++++++++++++++++++++++ //

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
    
})

// ++++++++++++++++++++++++ Promise 3 +++++++++++++++++++++++++ //

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username: "Akhil", email: "example@gmail.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
    
})

// ++++++++++++++++++++++++ Promise 4 ++++++++++++++++++++++++++ //

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "Akhil9868@", password: "1234"})
        } else {
            reject("Error: Something went wrong" )
        }
    }, 1000)
})

const username = promiseFour
.then((user) => {
    console.log(user);
    return user.username})
.then((username) => {
    console.log(username);})
.catch((error) => {
    console.log(error);})
// .finally(() => console.log("The promise is either resolved or rejected")) 


// ++++++++++++++++++++++++ Promise 5 ++++++++++++++++++++++++++ //

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Nikhil1234@", password: "829356"})
        } else {
            reject("Error: Something went wrong, do it later...!!!" )
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);  
    } 
}

consumePromiseFive()

// ++++++++++++++++ Fetch users through API +++++++++++++++++ //

// async function getAllUsers() {
//     try {
//         const resposne = await fetch('https://jsonplaceholder.typicode.com/users/')
//         const data = await resposne.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);  
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);  
})
.catch((error) => console.log("Error: ", error))

