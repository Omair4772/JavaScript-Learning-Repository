const clock = document.getElementById("clock")

// to run it every second you have to use setinterval in which you give it a function and number that run it continous but delay will be that number you give

setInterval(function() {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
