/* Question 22.
The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    Sort the array and find the min and max age
    Find the median age(one middle item or two middle items divided by two)
    Find the average age(all items divided by number of items)
    Find the range of the ages(max minus min)
    Compare the value of (min - average) and (max - average), use abs() method
*/


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// sort array
ages.sort((a, b) => a - b); 
console.log(ages); // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

// find the min and max
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

console.log(minAge); // 19
console.log(maxAge); // 26


// find the median age
const middle = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 !== 0 
  ? ages[middle] 
  : (ages[middle - 1] + ages[middle]) / 2;

console.log(middle);
console.log(medianAge);

// find average age
const total = ages.reduce((acc, age) => acc + age, 0);
const averageAge = total / ages.length;

console.log(total);
console.log(averageAge);

// find range of the age
const range = maxAge - minAge;
console.log(range);

// To compare the values of (min - average) and (max - average):
const differenceMin = Math.abs(minAge - averageAge);
const differenceMax = Math.abs(maxAge - averageAge);

console.log(differenceMin);
console.log(differenceMax);
