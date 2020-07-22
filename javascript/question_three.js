// Question 3

// An array A consisting of N integers is given. The dominator of array A is the
// value that occurs in more than half of the elements of A.
// Write a function:
// that, given an array A consisting of N integers, returns index of any element of array A in
// which the dominator of A occurs. The function should return −1 if array A does not have a
// dominator.

const findDominator = (arrayA) => {
    const arrTransform = arrayA.reduce((acc, val, index) => {
      if (acc[val]) acc[val].push(index);
      else acc[val] = [index];
      return acc;
    }, {});
    let dominatorCollection;
    const isDominant = Object.values(arrTransform).some((value) =>{ 
      dominatorCollection = value;
      return value.length > arrayA.length / 2;
      });
    return isDominant ? dominatorCollection : -1;
  }
  
// Test 3
// console.log(findDominator([3, 4, 3, 3, -1, 3]))