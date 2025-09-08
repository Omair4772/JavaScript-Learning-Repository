const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach
(
    function btn(button) {
//console.log(button);
    button.addEventListener('click', function(clickEvent)
    {
         //console.log(clickEvent);
        // console.log(clickEvent.target); // GET THE BUTTON NAME FROM WHICH WE GOT CLICK
        // if(clickEvent.target.id === "grey" || clickEvent.target.id === "blue" || clickEvent.target.id === "white" || clickEvent.target.id === "yellow"){
        // }
        
        // simple
        body.style.backgroundColor = clickEvent.target.id
        
    });
});