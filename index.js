//Removes duplicate elements from an array.
const removeDuplicates = array => [...new Set(array)];

//Calculates the sum of even numbers in an array.
const sumEvenNumbers = array => array.filter(x => x % 2 === 0).reduce((acc, x) => acc + x, 0);

//Calculates the average of all numbers in an array.
const average = array => array.reduce((acc, x) => acc + x, 0) / array.length;

//Reverses the order of characters in each string of an array.
const reverseStringArray = array => array.map(str => str.split('').reverse().join(''));

//Groups array elements by their string length.
const groupByLength = array => array.reduce((acc, x) => {
    const length = x.toString().length;
    acc[length] = acc[length] || [];
    acc[length].push(x);
    return acc;
  }, {});

//Removes falsy values (false, null, 0, "", undefined, and NaN) from an array.
const removeFalsy = array => array.filter(Boolean);

//Multiplies each element of the array by its index.
const multiplyByIndex = array => array.map((x, i) => x * i);

// Partitions the array into two arrays based on a given condition.
const partition = (array, condition) => array.reduce((acc, x) => {
    acc[condition(x) ? 0 : 1].push(x);
    return acc;
  }, [[], []]);

// Creates a new array that is the union of two arrays with unique elements.
const uniqueUnion = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

// Rotates the elements of an array to the left by a specified number of positions.
const rotateLeft = (array, positions) => [...array.slice(positions), ...array.slice(0, positions)];

module.exports={removeDuplicates,sumEvenNumbers,average,reverseStringArray,groupByLength,removeFalsy,multiplyByIndex,partition,uniqueUnion,rotateLeft};


