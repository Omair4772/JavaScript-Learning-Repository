// function
// function sayMyName() 
// {
//     console.log("O");
//     console.log("m");
//     console.log("a");
//     console.log("i");
//     console.log("r");
// }
// sayMyName() <= execution
// sayMyName <=  reference
// sayMyName()

// function addNumbers (num1,num2){
//     console.log(num1 + num2); 
// }
// //getting problem if you give not a number value
// addNumbers(2,9) // aslo getting problem while adding its values in anoher variables 

//  function addNumbers (num1,num2){
//     let result = num1 + num2
//     return result
//     // return num1 + num2 // Another way .. also saving space for not declearing variable
//     console.log("HYE"); // unreachble code because of return
//  }

// const result = addNumbers(22,44)
// //console.log("Result: ", result);

// function userLoggedIn (username){ // also default value can be like username = "Omair"
//     if(!username){
//         console.log("Please Enter Your Name!");
//         return
//     }
//     return `${username} Just Logged In`
// }
// console.log(userLoggedIn("Omair"));


// What if you don't know how many parametters will come from the user 
// rest operator is the solution

// function parametter(num,...num1) // its a spread operator but its also called rest operator depends functionality on usecase
// {
//     console.log(typeof num1);
//     console.log(num);
//     return num1

// }
// // rest operator will take all the values in object form
//console.log(parametter(100,1122,33, "cham cham")); 


// how to pass object into function
// //object
// const user = {
//     username: " Omair",
//     id: 123
// }
// function ObjectHandler(anyObject){
//     console.log(`userName is ${anyObject.username} and price is ${anyObject.id}`);
// }
// ObjectHandler(user)

// //how to pass arrays into function
// const myarray = [11,2,34,5,6,7]

// function myarrayFunction(getarray){
//     return getarray[4]
// }
// console.log(myarrayFunction(myarray));
