// Loops

// for loops
// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);   
// }

//Neasted For // Printing Tables
// for (let i = 1; i <= 3; i++) {
//    console.log("TABLE : ", i)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// // break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log("5 Number Detected");
//       //  break
//         continue
//     }    
//     console.log(`VALUES ARE ${index}`);
    
// }

// while loop
// let i = 1
// while (i <= 5) {
//     console.log(`VALUE IS : ${i}`);
    
//     i++ // i+2 will increament + 2
// }

// while on array 

// const myarray = ["Omair", "Ahmad", "Khalil"]
// let i = 0
// while(i < myarray.length){
//     console.log(`MY ARRAY CONTAINS ${myarray[i]}`);
//     i++
// }

// do while
// let score = 1
// do {
//     console.log(`SCORE IS : ${score}`);
//     score++
// } while (score <= 5);

//["","",""] // array
//[{},{},{}] // can take objects 

// for of loop 
// const myarr = [1,2,3,4,5]
// for (const num of myarr) // num of object(means on which object you want to add loop) you can give string objects, arrays
// { 
//     console.log(num);    
// }

// for in loop 
// Also use for getting keys and values from Object we discuss this in line 93
// const myobject = {
//     name: "omair",
//     id: "123"
// }
// for (const key in myobject) {
//     if (Object.prototype.hasOwnProperty.call(myobject, key)) {
//         const element = myobject[key];
//         console.log(element);  
//     }
// }

// MAPS
// map is used for unique data storing like dublicate data can't be stored 
// also map remember your order of data 

// // map declearation
// const map = new Map()
// // data insertion
// map.set('Pk', "Pakistan")
// map.set('FR', "France")
// map.set('CA', "Canada")
// // console.log(map);

// // making array desructure to get keys and values separatly 
// for (const [key, value] of map) {
//     console.log(key,':-', value);
// }

// Getting object
// const myObj = {
//     js: "Javascript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by Apple"
// }

// for (const key in myObj) {
//     console.log(`KEY: ${key} VALUE:  ${myObj[key]}`);
    
// }

// Is for in loop works with Array ?

// const programming = ["france","china","pakistan","UK","US"]

// for (const key in programming) {
//     //console.log(key)// it prints keys of array which is Numbers 0 to infinty
//     //how to get values and keys?
//     console.log(`keys: ${key} Value: ${programming[key]}`);
// }

// can we apply for in loop on Map ?

// const map = new Map()
// map.set('Pk', "Pakistan")
// map.set('FR', "France")
// map.set('CA', "Canada")

// for (const key in map) {
//    console.log(key); // Nothing to print 
//    //but how to ? we will discuss it
// }


// FOR EACH LOOP

// const array =["Hey","Omair"]

// array.forEach(
//     function (item) {
//         console.log(item);
        
//     }
// )

// array.forEach(element => {
//     console.log(element);
// });

// you can access its item + index + whole Array

// array.forEach((item, index, array)=>{
//     console.log(item, index, array);
// })

// objects in array get in for Each Loop

// const myarray = [

//     {
//         city: "Peshawar" ,
//         language: "Pushto"
//     },
//     {
//         city: "Lahore",
//         language: " Punjabi"
//     },
//     {
//         city: "Karachi",
//         language: " Punjabi"
//     }
// ]
// myarray.forEach((item) =>{

//     console.log(`${item.language} Is spoken in ${item.city}`); 
// }
// )
