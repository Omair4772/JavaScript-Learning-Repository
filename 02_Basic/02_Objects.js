// declearing object is 2 ways 1st is literal 2nd is constructer

//here is one concept called Singleton 
// singleton are when we declear it from literals it will not make it singleton and 
// WHEN it declear from the constructor it will be a singleton object

//object
// const  mySym = Symbol("key1")
// const jsUser = {
//     name: "Omair",
//     [mySym]: "22", // taking Symbol as a key 
//     location: "Peshawar",
//     email: "omair@gmail.com",
//     isLoggedIn: false
// }

// jsUser.email = "omairahmad@gmail.com"
// //Object.freeze(jsUser) // it will freeze the object not editable 

// // console.log(jsUser.name);    // bad practice 
// // console.log(jsUser["email"]); // we add index as a string because objects keys are acctually a string values
// // console.log(jsUser[mySym]); // we add index as a string because objects keys are acctually a string values


// // Object Literals
// jsUser.Greeting = function(){
//     console.log("Dear User");
// }

// jsUser.Greeting2 = function(){
//     // This is referene of this function.... connected to this function will be access here
//     console.log(`Hello dear User ${this.name},${this.email}`);
// }
// console.log(jsUser.Greeting(),jsUser.Greeting2());

// Non Literals
// const UserData = {}

//  UserData.id = "123"
//  UserData.name = "Omair" 
//  UserData.isLoggedIn = false 

// console.log(UserData);

// const regualUser = {
//     email: "Omair@gmail.com",
//     FullName:{
//         complete:
//         {
//             firstName: "Omair",
//             lastName:"Ahmad"
//         }
//     }
// }
// // console.log(regualUser.FullName.complete.firstName); // access neasted values

// const obj1 = {1:"A", 2:"B"}
// const obj2 = {3:"C", 4:"D"}

// //const obj3 = {obj1,obj2} // wrong it will get object inside object
// //for combining 
// // {} is target and obj1,obj2 are the sources 
// const obj3 = Object.assign({},obj1,obj2) // {} optional but it confirm it will added like singnle
// const obj4 = {...obj1, ...obj2} // easy spread method
// console.log(obj4)

// Mostly use in getting Data from the DataBases ... which gives data in Arrays

// console.log(UserData);
// // getting keys and values of the object for iteration or other needs
// console.log(Object.keys(UserData));
// console.log(Object.values(UserData));
// console.log(Object.entries(UserData)); // making every key with values in seperate array
// console.log(UserData.hasOwnProperty('name')); // Searching something in objects


// const course = {
//     courseName: "Omair",
//     price: "999"
// }
// // console.log(course.courseName);
// const {courseName: nameIs} = course // can rename accordingly
// // console.log(courseName);
// console.log(nameIs);


// JSON API

// {
//     "Name": "Omair",  // Keys and values will be in string format
//     "Id": "123",
//     "isActive": "false"
// }

// [
//     {}, // Sometimes we will get data in Arrays like this
//     {},
//     {}
// ]