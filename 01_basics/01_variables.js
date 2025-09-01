const accountId = 144453
let accountEmail = "rohitvishwakarma@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 12345 // not allowed
console.log(accountId);

accountPassword = "543210"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])