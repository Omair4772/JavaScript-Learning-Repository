// Immediately Invoked Function Expressions (IIFE)

// // () ()  first one is for function and the secund one is for execution
// //()() is used for removing the globle scope pollution 
// (function chai(){
//     // this type of IIFE called Named IIFE
//     console.log("Chai Is Ready")
// }) (); // use semicollon for ending the IIFE

// // also can be for giving arguments also
// ((name) => {
//     // this type of IIFE called UnNamed IIFE
//     console.log(`Chai Is Ready ${name}`)
// }) ('Omair'); // use 2nd one as like a function which takes the parametters