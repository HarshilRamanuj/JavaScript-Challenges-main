// Challenge 01 Template Literals

// Using the below variables in a template literal make a string 'Today's date is 23rd July 2023, temprature today will be 32 Celcius and weather will be Cloudy'

const day = "23rd July 2023";
const temprature = "32 Celcius";
const weather = "Cloudy";

// console.log(
//   `Today's Date Is ${day},temprature today will be ${temprature} and weather will be ${weather}`
// );

const currentDate = new Date();
console.log(currentDate.getFullYear());
const ddate = `${currentDate.getDate().toString()} ,${currentDate
  .getFullYear()
  .toString()} `;
// Now instead of using static variables use a make a function that accepts day, temprature and weather as parameters and print the same string using a function

function printString(day, temprature, weather) {
  console.log(
    `Today's Date Is ${day},temprature today will be ${temprature} and weather will be ${weather}`
  );
}

printString(ddate, "32 Celcius", "cloudy");

// Bonus challenge: Instead entering the date manually use the JavaScript Date Object (MDN LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to get the date and pass it to the function.
