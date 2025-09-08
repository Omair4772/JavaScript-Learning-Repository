const form = document.querySelector("form")
// form when you submit it automatically send the data to the base url for server/
// so in this case we are not sending any data to the server so we have to stop
// its default action
form.addEventListener('submit', function(event) {
    event.preventDefault() // stopping default submission
  const Height = parseInt(document.querySelector('#Height').value)
  const Weight = parseInt(document.querySelector('#Weight').value)
  const Results = document.querySelector('#Results')
  const bmiLow = 18.6, bmiHigh = 29.9

  if(Height === "" || Height < 0 || isNaN(Height)){
    Results.innerHTML = "Please Give a Valid Height";
  }
  else if(Weight === "" || Weight < 0 || isNaN(Weight) ){
    Results.innerHTML = "Please Give a Valid Weight";
  }
  else{
    const bmi =  (Weight / ((Height*Weight) /10000)).toFixed(2)

    // show result
    if(bmi <= bmiLow){
        Results.innerHTML = `<span>${bmi} <div></span><span>You Are UnderWeight</span></div>`
    }
    if(bmi > bmiLow && bmi < bmiHigh){
        Results.innerHTML = `<span>${bmi} <div></span><span>You Are Normal</span></div>`
    }
    if(bmi >= bmiHigh){
        Results.innerHTML = `<span>${bmi} <div></span><span>You Are OverWeight</span></div>`
    }
  }
}); 