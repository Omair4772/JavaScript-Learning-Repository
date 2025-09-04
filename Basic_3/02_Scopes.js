// Scopes

//  {} <= scopes.. which means that variables inside these parameters will be only access inside the Parameters you can't access it from inside

// example

// if(true){

//     const a = 11
//     console.log(a) // a can be access here but not outside the if statment
// }
// //console.log(a); // not accessble and giving you an error
// // so a is a local variable of if statment ...
// //  you can create another a variable outside the if statment it will consider as new variable
// //  and will not give you an error of dublicate variable.
// // DON't use VAR variable because it has a scoping issues .. you can use const and let insead

// const a = 22 // just like this 

// console.log(a) // <=

// Also avaible neasted scopes Also called Closure.. Closure is Child functions can access its parent variables
// but parent function can't access their child variables

// hoisting .......  INTERSETED

// console.log(add(2));
// // in that way of creating a function you can access add function before it created 
// function add(num){
//     return num + 1
// }
// // console.log(sub(3)) // giving you error
// //because you can't access before declearing a function like this 
// const sub = function(num){
//     return num - 2
// }
// // console.log(sub(3)) // you can access it here