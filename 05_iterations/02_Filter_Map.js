// How to get retun values from Array using Filter

// const myArr = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10]
// let newarr = myArr.filter( (arr) => arr > 5) // also need a condition to return a value
// // if you open scope on this so you have to write a return with it otherwise it will return 
// // a empty array /////////////////
// // myArr.filter( (arr) => { return arr > 5 })
// console.log(newarr);

// // if you want to use For Each  but this is very difficult
// let newArr = []

// myArr.forEach( (num) => {
//     if(num > 5){
//         newArr.push(num)
//     }
// })
// console.log(newArr);

// Filter Out data From database type Data
// sometimes you will get data from database like this... Objects inside array 
// const dataBaseData = [
    //     {title: "Book one", genre: "History", publish: 1916, edition : 2015},
    //     {title: "Book two", genre: "Science", publish: 1936, edition : 2016},
    //     {title: "Book three", genre: "Fiction", publish: 1946, edition : 2017},
    //     {title: "Book four", genre: "Non Fiction", publish: 1956, edition : 2018},
    //     {title: "Book five", genre: "History", publish: 1976, edition : 2019},
    //     {title: "Book six", genre: "Bio", publish: 1986, edition : 2020},
    //     {title: "Book two", genre: "Science", publish: 1982, edition : 2022},
    //     {title: "Book six", genre: "Bio", publish: 1996, edition : 2024}
    // ]
    
    // const filteredBooks = dataBaseData.filter((book) => book.genre === "Bio" || book.publish > 1950);
    // console.log(filteredBooks);
    
    // MAP
    // const myNumbers = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10]
    // // automatically return a value
    // const newNums = myNumbers.map((nums) =>{ return nums + 10 })
    // console.log(newNums);
    
//     // CHAINING METHOD
// const Numbers = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10] 

// const newNumbers = Numbers
//                     .map((num) => num * 10)
//                     .map((num) => num +1)           // you can use many map and filter at the same time
//                     .filter((num)=> num >= 50)
// console.log(newNumbers);
