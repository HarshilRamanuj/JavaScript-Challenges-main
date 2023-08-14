// Challenge 03 Arrow Functions

// Convert the given function into an arrow function and store the returned value in a variable and log it to the console.

function mathFunction(a, b) {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  return { addition, subtraction, multiplication, division };
}

const mathFun = (a, b) => {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  return { addition, subtraction, multiplication, division };
};

const { addition, subtraction, multiplication, division } = mathFun(3, 4);
console.log(addition, subtraction, multiplication, division);

const add = (a, b) => a + b;
console.log(add(5, 4));
