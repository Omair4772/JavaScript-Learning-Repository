// Primitive datatypes

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 200
const score2 = 33.2

const isLoggedIn = false
const outsidedTemp = null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

//console.log(id === anotherId) answer false

const BigInt = 2134213412342134n


// Reference Type (Non Primitive)
// Array, Objects, Functions

const Heros = ["Omair","Ahmad","Khalil"]
    
let myObject = {
    name: "Omair",
    age: 22
    }

const myFunction = function(){
    console.log("Hello Wolrd");
}

console.log(typeof myFunction);

