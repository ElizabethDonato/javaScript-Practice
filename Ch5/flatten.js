//Begin with an array of arrays
let arrays = [[1, 2, 3], [4, 5], [6]];

//Use reduce method with a and be representing the first two elements of the array
//Use concat method to 'flatten' the arrays into one array by adding each 
//value from the array of arrays individually onto the first array element.

console.log(arrays.reduce((a, b) => a.concat(b)));
