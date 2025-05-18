const accountId = 1234435
let accountEmail = "akhilrajput123@gmail.com"
var accountPassword = "Akhil1234@"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "ak1234kumar@gmail.com"
accountPassword = "AKRAJ123@"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


