
//jQuery - on           

// Important
//type, tomestamp, defaultPrevented , Target, ToElement, srcElement, CurrentTarget
// clintX, clintY, screenX, ScreenY
// altKey, ctrlKey, shiftKey, keyCode

// Old Approach
// document.getElementById("Telephone").onclick = function (event) {
//     alert("Telephone Clicked")
// }

// new approach
// document.getElementById("Lemon").addEventListener('click', function(event) {
    //         alert("Lemon Clicked")
    // }, false)
    
// AttachedEvent() 
// document.getElementById("Lemon").addEventListener('click', function(event) {
//      console.log(event);
// }, false)

// This False and True Called EventPropegation... it has 2 Context 1: EventBubling 2: EventCapturing
// EventBubling(False) is used on the large scale but sometimes we need EventCapturing(True)

// document.getElementById('images').addEventListener('click', function(event) {
//      console.log("Clicked Inside Images");
// }, false)

// document.getElementById("Lemon").addEventListener('click', function(event) {
//      console.log("Lemon Clicked");
// }, false) 

// BUblingam is used like it will run from inside to outside like bubble expending from low to high
// To Control or Reverse the Execution we use Event Capturing which works opposite of it

// document.getElementById('images').addEventListener('click', function(event) {
//      console.log("Clicked Inside Images");
// }, false)

// document.getElementById("Lemon").addEventListener('click', function(event) {
//      console.log("Lemon Clicked");
// }, true) 

// Now it will go from up to bottom 
// To Stop Bublingmam like you want that the inside event only execute by self 

// document.getElementById("Lemon").addEventListener('click', function(event) {
//     console.log("Lemon Clicked");
//     event.stopPropagation()
// }, false) 

// // To stop bublingam and defaultPrevent lets do it

// document.getElementById("google").addEventListener('click', function(event) {
//     console.log("Google Clicked");
//     event.preventDefault()
//     event.stopPropagation()
// }

// When  Clicked On Image Dlt it

// document.querySelector("#images").addEventListener('click', function (event) {
//     // console.log(event.target.parentNode)
//     let pic = event.target.parentNode
//     // FIRST APROACH
//     // pic.remove()
//     //SECOND APROACH
//     // pic.parentNode.removeChild(pic) 

//     if(event.target.tagName === 'IMG'){
//        pic.remove()
//     }
// })
