// PROject 1 to print name on every sec when we click on the start button and
//  when we click on the stop so then it will stop printing the name 

// project 2 is also the same but in this you have to change the background color when start is clicked and 
// when stop then pause the changing background

// project 1   (Assignment)
// click on start to print 
// and click on stop to pause print

 const startbutton = document.querySelector('#start')
 const stopbutton = document.querySelector('#stop')


// function printer(){
//     console.log("omair ", Date());
// }

// startbutton.addEventListener('click', function() {
    
//     const interval = setInterval(printer,1000)
    
//     stopbutton.addEventListener('click', function() {
//         clearInterval(interval) 
//     }) 
// })





// Project 2 
// click on start to set random color in background every sec 
// and then when click on stop to stop changing bg color

// select randnom Color we will use some math.random
// all colors have 6 alphanumeric keys from 0-9 A-F lets get it

// const randomColor = function(){
//     const hex = "0123456789ABCDEF";
//     let color = "#";

//     for(let i = 0; i < 6; i++){
//          // randomColor size = 16 so thats why we take 16
//          color += hex[Math.floor(Math.random()* 16)];
//     }
//     return color;
// };

// let interval;
// function startChangingColor(){
//     if(!interval){
//     interval = setInterval(changingColor, 1500);
//     function changingColor(){ document.body.style.backgroundColor = randomColor();}}
// }

// function stopChangingColor(){
//     clearInterval(interval)
//     interval = null
// }

// startbutton.addEventListener('click', function() {
//    startChangingColor()
// })

// stopbutton.addEventListener('click', function() {
//     stopChangingColor()
// }) 



