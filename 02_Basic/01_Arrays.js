//array
// arrays are objects
// const myArray = [0,1,2,3,4,5,6,7]
// const my2Array = new Array(9,3,4,6,8,5,7)
// const myNames = ["Omair","Ahmad","Khalil"]

// console.log(my2Array)
// console.log(my2Array.length)
// console.log(myArray[1],my2Array[3],myNames[2]);

// Methods

// my2Array.unshift(23) // adding something to array start
// my2Array.shift() // removed that added value of the unshift in array
// my2Array.push(99)  // adding something to array end
// my2Array.pop() // deleting last array index
// //console.log(my2Array.includes(2)); // Asking something
// console.log(my2Array.indexOf(6)); // Asking index of
// const myNewArr = my2Array.join() // Adding one array to another Variable as a String
//console.log(myNewArr);


// SLICE AND SPLICE

//slice
//Copies elements from index 0 to 3 (end index is exclusive).
//Doesn’t change the original array.

//splice
//Removes elements from the original array, starting at index 0, removing 4 elements.
//Returns those removed elements.

// const arr = [22,34,67,5,3,2]
// console.log("A ", arr);

// const sliceArr = arr.slice(0,3)

// console.log("Slice ", sliceArr);
// console.log(" B ", arr);

// const spliceArr = arr.splice(0,4)
// console.log("Splice ", spliceArr);

// console.log(" c ", arr);


//  const array1 = ["Omair","Ahmad","Khalil"]
//  const array2 = ["Omair2","Ahmad2","Khalil2"]

// Neasted Array
// array1.push(array2) 
// console.log(array1[3][0]);

// Adding two array in new Array
// const newArray = array1.concat(array2)
// console.log(newArray);

//Spread Operator works the same
//const myNewArrayIs = [...array1,...array2] // working the same way of concat but easy this is the easy method and also you can add multiple arrays inside but in concat you can only add one
//console.log(myNewArrayIs);

// neasted neasted array in one single array 
// const thearray = [1,2, [3,4],5,6,[7,8,[9,10],11],12]
// const singleArray = thearray.flat(Infinity) // FLAT  used to get all neasted array in one you can tell it how much in depth it will go by adding number in flat(This place)
// // console.log(singleArray);

// console.log(Array.isArray("Omair")) //False ASKING if its array
// console.log(Array.from("Omair")) //converts every array into alphabit by alphabit

// let score1 = 10
// let score2 = 20
// let score3 = 30
// console.log(Array.of("Omair", score1,score2,score3)) // make it single Array

//console.log(Array.from(Object.values({name:"omair",rollNumber:"222"}))); //telling the values as will otherwise it will get empty array
