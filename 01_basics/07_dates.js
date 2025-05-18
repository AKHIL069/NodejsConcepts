// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Sun May 18 2025
// console.log(myDate.toLocaleString()); // 5/18/2025, 3:32:20 PM

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); 

let myCreatedDateNew = new Date("2023-01-14")
// console.log(myCreatedDateNew.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDateNew.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate()); // get date
console.log(newDate.getMonth() + 1); // get month

newDate.toLocaleDateString('default', {
    weekday: "long",
    timeZone: "UTC"
})

console.log(newDate);





