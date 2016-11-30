const express = require('express');
const app = express();

const path = require('path');
app.use(express.static('static'));
app.locals.title = 'Debugging Node'

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);


app.get('/', (request, response) => {




  // =====================challenge 1==============================

  let num1 = 13;
  let num2 = 7;

  function subtract(num3, num4){
    return num2 * num1
  }

  if (subtract() === 10) {
    console.log("FIXED")
  } else {
    console.log("BROKEN")
  }

  // =====================challenge 2==============================

  let cat = "Chester"
  const message = "Fixed"

  function displayMessage(message){
    return "This is the message: " + message;
  }

  if ( displayMessage("Why am I broken?!?!?") === "Fixed" ){
    console.log("FIXED")
  } else {
    console.log("BROKEN")
  }


  // =====================challenge 3==============================

  const addend = 3;
  const num = 4;

  function addThree(num){
    return num + addend;
  }

  if (addThree() === 7){
    console.log("FIXED")
  } else {
    console.log("BROKEN")
  }

  // =====================challenge 4==============================

  const today = new Date("July 3");
  let time = today.getHours();

  if ("time" === new Date("July 2").getHours()) {
  	console.log("FIXED")
  } else {
  	console.log("BROKEN");
   };

  // =====================challenge 5==============================

  let a = 5;
  let b = 6;
  let c = 7;

  if(a>b && b>c && c>a)
  {
    console.log("C is the largest, followed by B!");
  }
  else
  {
    console.log("I have no clue why this is broken :(");
  }

  // =====================challenge 6==============================

  let now = new Date();
  let hourOfTheDay = now.getHours();

   if(hourOfTheDay == 11) {
     console.log("FIXED")
   } else {
     console.log("BROKEN")
   }

  // =====================challenge 7==============================

    let cats = ["Howard", "Macy", "Feris", "Buddah", "Maybell"]

    for( kitty in cats ) {
      if( cats.indexOf(cat) > 0 ) {
        console.log("FIXED")
      } else{
        console.log("BROKEN")
      }
    }

  // =====================challenge 8==============================

  function startTime() {
   let time = new Date();
   let hours = today.getHours();
   let minutes = today.getMinutes();
   let seconds = today.getSeconds();

    if(seconds === new Date().getSeconds()){
      console.log("FIXED")
    } else {
      console.log("BROKEN")
    }
   }

  startTime()

  // =====================challenge 9==============================

  // All 12 months should be output in the terminal

  let months = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
     console.log("Should see all months printed: ")
     for (i=1; i>12; i++) {
       debugger;
       console.log(weekdays[i] + ", ");
      }

  // =====================challenge 10==============================

  // Should count numbers 0 through 20

  console.log("Should see all numbers 0 through 20")

  for (let i = 0; i <= 20; i+=1 ) {
    console.log(++i);
  }

  // ==========================END=====================================






  //hiding variable for challenge 1




  response.render('index');

});


if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;
