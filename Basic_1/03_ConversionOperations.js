
// ######################################### CONVERSION ###############################################

let score = 33
let VarInNumber = Number(score);  // WHEN  WE WANT TO CONVERT ONE VARIABLE OPERATION INTO ANOTHER

let Stringscore = "33ABC"
let SInNumber = Number(Stringscore);      // IF WE WANT ANOTHER TYPE FOR CONVERSION INTEAD OF NUMBER WE NEED TO TYPE ITS NAME 
                                    // JUST LIKE STRING(SCORE) BOOLEAN(SCRORE) ETC
let Boolscore = true
let BInNumber = Number(Boolscore);

// THERE ARE SOME ISSUES WITH JS IN TYPE CHECKING IT WILL CONVERT ANYTHING IN NUMBERS BUT THE RESULT WILL BE INCURRECT
/*
// OUTPUT
console.table([VarInNumber,SInNumber,BInNumber]);

console.log(typeof VarInNumber);
console.log(typeof SInNumber);
console.log(typeof BInNumber);


/*  

THE OUTPUT FOR SCORE AFTER CONVERSION IS 33
THE OUTPUT FOR STRINGSCORE AFTER CONVERSION IS NaN
THE OUTPUT FOR BOOLSCORE AFTER CONVERSION IS 1

1 => true
0 => false
"" => FALSE
"Omair" => true

FOR BOOLEAN CONVERSION IF WE CONVERT THEN 1 = TRUE / 0 = FALSE // EMPTY STRING = FALSE, VALUABLE STRING = TRUE 
*/

let isloggedIn = 1
let IsloggedIN = ""
let IsloggedINN = "Omair"

let findout = Boolean(isloggedIn);
// console.log(findout);

let findout2 = Boolean(IsloggedIN);
// console.log(findout2);

let findout3 = Boolean(IsloggedINN);
// console.log(findout3);


// ######################################### OPERATIONS ###############################################

let value = 2
let negitiveValue = -value

// console.log(negitiveValue);


                        // Basic
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //2 power 2
// console.log(2/2);
// console.log(2%2);
// let string3 = str1 + str2    // Output  (STR1 Value STR2 value)
/*
console.log("2" + 2);           // 22
console.log(2 + "2");           // 22
console.log(2 + 2 + "2");       // 42
console.log("2" + 2 + 2);       // 222
console.log("2" + (2 + 2));     //  24    // () IT WILL FIRST adding the inside the brackets value

*/


 // prefix = ++gamecounter and postfix = gamecounter++

 let gamecounter = 100
 gamecounter ++      //OutPut 101

// console.log(gamecounter);


 let gamecounter2 = 100
 ++gamecounter2      //OutPut 101

//console.log(gamecounter2);

