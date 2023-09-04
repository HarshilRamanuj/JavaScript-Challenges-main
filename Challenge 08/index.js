// Challenge 08 Nullish Coalescing Operator

// Write Nullish Coalescing Operation withing printDetails function such that the function accepts empty string as last name

function printDetails(fname, lname) {
  lname = lname == null ? "" : lname;
  console.log(`I am ${fname} ${lname}`);
}
printDetails("Abhishek");

function printDetail(fname, lname) {
  lname = lname ?? "";
  console.log(`I am ${fname} ${lname}`);
}
printDetail("Harshil");
