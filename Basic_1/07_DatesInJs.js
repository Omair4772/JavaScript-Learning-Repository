
let myDate = new Date()
// basic but messy 
// it will print dates according to the country 
//and also not giving you just numbers but in alphaNumeric format like (wed sept 2, 2025)

// console.log(typeof myDate); // object
// console.log(myDate); // 2025-09-03T04:11:01.825Z
// console.log(myDate.toString());// Wed Sep 03 2025 09:11:31 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toDateString()); // Wed Sep 03 2025
// console.log(myDate.toISOString()); // 2025-09-03T04:14:55.078Z
// console.log(myDate.toJSON()); // 2025-09-03T04:11:01.825Z 
// console.log(myDate.toLocaleString()); // 9/3/2025, 9:14:55 AM
// console.log(myDate.toLocaleTimeString()); // 9:11:31 AM
// console.log(myDate.toLocaleDateString()); // 23/2/2025
// console.log(myDate.toUTCString()); // Wed, 03 Sep 2025 04:11:01 GMT


// dates start from 0 .. works like index
//let myNewDate = new Date(2022,0,10) // printing specific date 
// let myNewDate = new Date(2022,0,10,3,4,50) // printing specific date and time 
//let myNewDate = new Date("12-22-2025") // printing specific Format 
//console.log(myNewDate.toLocaleString()); 
//console.log(myDate.getDay());// more to go //// getting day only 

// let myTime = Date.now() // TimeStemp
// console.log(myDate.getTime()); // 1756874386028
// // giving a long milisecond value from the date and time create in js 1,Jan,1970 
// console.log(Math.floor(myDate.getTime()/1000)); // converting to seconds


// // CUSTOMIZING SOME DATE format 
// let myCustomizedDate = myDate.toLocaleString('default',{
//     weekday: "long",
//     year: '2-digit'
// })
// console.log(myCustomizedDate);
