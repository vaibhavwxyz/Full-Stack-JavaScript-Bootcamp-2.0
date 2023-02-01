/* Question 28.
Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/

// Function to print a triangle pattern
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
      let row = '';
      for (let j = 0; j < i; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  // Function to print a square pattern
  function printSquare(n) {
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  // Function to print a pyramid pattern
  function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let row = '';
      for (let j = 1; j <= n - i; j++) {
        row += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  // Call the functions with the input value of 3
  printTriangle(3);
  console.log('\n');
  printSquare(3);
  console.log('\n');
  printPyramid(3);
  