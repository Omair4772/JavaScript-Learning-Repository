// // const score = 300 // can be string, number or any other
// // const balance = new Number(200) // 100% will be the number

// // console.log(score, balance);
// // //you can convert it to string some more also find its length like that
// // console.log(balance.toString().length); 

// // // getting values in float
// // console.log(balance.toFixed(2));

// // //GETTING PRECISED VALUE
// // const numberIs = 232.651 
// // // above .5 will consider as above number like 2.6 will be 3 and 2.4 will be 2
// // console.log(numberIs.toPrecision(4))

// // const numberForReadability = 100000000
// // // makes it readable on adding some commas
// // // DOING IT ACCORDING COUNTRY
// // console.log(numberForReadability.toLocaleString('en-IN')); 

// // MATHS

// // console.log(Math);
// // console.log(Math.abs(-4));  // absolute value ... negitive to positive
// // console.log(Math.round(4.6)); //if 4.4 then will be 4 if 4.6 then 5
// // console.log(Math.ceil(4.01)); // even if 4.01 it will consider as 5
// // console.log(Math.floor(4.99)); // if 4.99 it will consider as 4
// // console.log(Math.min(1,10)); // get minimum value in given numbers
// // console.log(Math.max(1,10)); // get maximum value in given numbers

// // console.log(Math.random()); // get random value btw 0 to 1
// const min = 10
// const max = 100
// console.log(Math.ceil(Math.random()* (max - min + 1 ))+ min); // get random value btw min to max