// Create a function that takes an array of non-negative 
// integers and strings and return a new array without the strings.

const filterArray = function(arr) {
 
  const onlyNum = arr.filter(element => element = typeof element === "number");
      console.log(onlyNum)
  }



filterArray([1, 2, "a", "b"]) 
// ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) 
// ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) 
//➞ [1, 2, 123]