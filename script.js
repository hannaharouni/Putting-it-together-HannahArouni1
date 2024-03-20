console.log("Welcome to the world of rodents!");

var miceCount = 10;
var ratCount = 5;

console.log("Number of mice:", miceCount);
console.log("Number of rats:", ratCount);
var totalRodents = miceCount + ratCount;
console.log("Total number of rodents:", totalRodents);
var difference = miceCount - ratCount;
console.log("Difference between mice and rats:", difference);

var age = 20;
if (age >= 18) {
  console.log("You are old enough to handle rodents.");
} else {
  console.log("You are not yet old enough to handle rodents.");
}

var indoorRodent; // Declare the variable without initializing it
var outdoorRodent; // Declare the variable without initializing it

console.log("This rodent can survive both indoors and outdoors.");
if (indoorRodent || outdoorRodent) {
  console.log("This rodent can survive either indoors or outdoors.");
} else {
  console.log("This rodent cannot survive indoors or outdoors.");
}
if (!outdoorRodent) {
  console.log("This rodent is not suitable for outdoor environments.");
} else {
  console.log("This rodent is suitable for outdoor environments.");
}