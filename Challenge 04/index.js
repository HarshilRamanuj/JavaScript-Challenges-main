// Challenge 04 Destructuring

// Populate the person object with your data and covert the printDetails function to use destructuring and call the function.
// The console output should look like 'Abhishek Sawant is 23 years old and lives in Vadodara'

const person = {
  fname: "Harshil",
  lname: "Ramanuj",
  age: 23,
  location: "Ahmedabad",
};

function printDetails(person) {
  const {
    firstName = person.fname,
    lastName = person.lname,
    age = person.age,
    location = person.location,
  } = person;
  const details = `${firstName} ${lastName} is ${age} years old and lives in ${location}`;
  console.log(details);
}

printDetails(person);
