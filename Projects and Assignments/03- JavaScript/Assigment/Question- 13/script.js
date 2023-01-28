var age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log("You need to wait " + (18 - age) + " more years to be able to drive.");
}
