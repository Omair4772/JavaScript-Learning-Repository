
// const means value will be assigned one time / unchangable value
const account_Id = 11223344 
let loggin = false;
let account_email = "omair@git.com" // let is the new way for initializing the variable and its bugs free
var account_password = "1231"    // var is the old way for initializing  variables. it has some issues with the like scoping the variables (scope is {} ) so developer decides to use let method
account_city = "peshawar"           // javascript can also initialize variables without adding the var/let before but we don't prefer it
let account_state;

// printing 

console.log(account_Id);

// for printing more then oneline you can print it by using console.table() METHOD
console.table([account_email,account_password,account_state]);


// Updating Above variables 

// account_Id = "1111"    This is not allowed because account_Id is a CONST variable
account_password ="1188" // This is allowed because this is not a CONST variable

console.log(account_password);
