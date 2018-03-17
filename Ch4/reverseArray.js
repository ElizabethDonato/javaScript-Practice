//Takes an array and returns a new array with elements in reverse order
function reverseArray(originalArray)
{
   var newArray = [];
   for(var i = (originalArray.length-1); i >= 0; i--)
   {
      newArray.push(originalArray[i])
   }
   //returns newly created array with elements in reversed order from the original
   return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

//Takes an array and reverses its contents.
//First, it establishes a midpoint for the array,
//and then it swaps values around th midpoint
function reverseArrayInPlace(originalArray)
{
   //Establishes midpoint so that all values will be swapped
   for (var i = 0; i < Math.floor(originalArray.length/2); i++)
   {
      //temp variable to hold value for swapping
 	    var temp = originalArray[i];    
      //swaps value in current position with value corresponding value in other half of array
      originalArray[i] = originalArray[originalArray.length-1-i]
      //Places original value in swapped location
      originalArray[originalArray.length-1-i] = temp;
   }
   //Returns original array, now in reversed order
   return originalArray;
}

var testArray = [1,2,3,4,5];
console.log(reverseArrayInPlace(testArray));


