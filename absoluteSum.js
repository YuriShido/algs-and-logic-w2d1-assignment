// Write a fucntion that takes an array of integers (positive or negative or both) and return 
// the sum of the absolute value of each element.

const getAbsSum = function(arr) {
 let sum = 0
 arr.forEach(element => {
   if (element < 0) {
    element = element * -1
  } else {
    element
  }
    sum += element;
  })
  return sum;
  }


console.log(getAbsSum([2, -1, 4, 8, 10])) 
// ➞ 25

console.log(getAbsSum([-3, -4, -10, -2, -3])) 
// ➞ 22

console.log(getAbsSum([2, 4, 6, 8, 10])) 
// ➞ 30

// getAbsSum([-1]) 
//➞ 1