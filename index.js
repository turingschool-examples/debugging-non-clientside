// =====================challenge 1==============================

const num1 = 5;
const num2 = 3;

function multiply(){
  return num1 x num2
}

if multiple() === 10 {
  console.log"FIXED"
} else {
  console.log("Broken")
}

// =====================challenge 2==============================

function displaymessage(message){
  return "This is the message: " + mesage;
}

displayMessage("Why am I broken?!?!? Or am I now Fixed?")


// =====================challenge 3==============================

const title = Mrs ;
const name = Erin;

function addTitle(){
  return title + ". " + name
}

addTitle()

// =====================challenge 4==============================

const today = new date();
let time = today.getHours();

if (time < 10) {
	console.log("Good Morning";)
} else {
	let here = ((time < 18) ? ((time < 13) ? "Good Day" : "Good Afternoon") : "Good Evening");
	console.log(here);
 };

// =====================challenge 5==============================

let a:5;
let b:6;
let c:7;

if(a>b && b>c && c>a)
{
  console.log("C is the largest, followed by B!");
}
else
{
  console.log("I have no clue why this is broken :(");
}

// =====================challenge 6==============================

let today = new Date();
let time = today.getHours();

 if {
   console.log("Good day!")
 } else(time < 10) {
   console.log("Good morning!")
 }

// =====================challenge 7==============================

let quote = "JFK once said, "Evil can only prevail if good [people] do nothing.""

console.log(quote)

// should output: JFK once said "Evil can only prevail if good [people] do nothing."

// =====================challenge 8==============================

// this code will cause an loop to occur. Uncomment it to solve the bug and then comment it back out with you are done.



// function startTime() {
//  let today = new Date();
//  let hours = today.getHours();
//  let minutes = today.getMinutes();
//  let seconds = today.getSeconds();
//
//  minutes = checkTheTime(minutes)
//  sseconds = checkTheTime(seconds)
//  console.log(hours + ":" + minutes + ":" + seconds)
//   t = settimeout(startTime, 1000)
//  }
//
// function checkTheTime(i) {
//  if (i<10)
//    {i="0" + i}
//    return i
//  }
//
// startTime();

// =====================challenge 9==============================

// All 12 months should be output in the terminal

let months = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
   for (i=1; i>12; i++)
   {
     console.Log(weekdays[i] + ", ");
    }

// =====================challenge 10==============================

// Should count numbers 0 through 20

for (let i = 0; i <= 20; i+=1 ) {
  console.log(++i);
}
