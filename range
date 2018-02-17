//Returns an array of numbers beginning
//with start parameter and ending with
//end parameter
function range(start, end)
{
   var rangeOfNumbers = [];
   for(var i = start; i <= end; i++)
   {
      rangeOfNumbers.push(i);
   }
   return rangeOfNumbers;
}
console.log(range(1, 10));

//Returns the sum of all values in an 
//array of numbers
function sum(numArray)
{
   var arraySum = 0;
   for (var i = 0; i < numArray.length; i++)
   {
      arraySum += numArray[i];
   }
   return arraySum;
}

console.log(sum(range(1,10)));

//Modifies range function to accept a step parameter
//to add values to the array in increments other
//than 1
function range(start, end, step)
{
   var rangeOfNumbers = [];
 
   //If we are counting up from a lower value to a higher value or if there is only one value in the array
   if(start <= end)
   {
      for(var i = start; i <= end; i += step)
      {
         rangeOfNumbers.push(i);
      }
   }
   
   //If we are counting down from a higher value to a lower value
  else
  {
     for(var i = start; i >= end; i += step)
     {
        rangeOfNumbers.push(i);
     }
   }
   return rangeOfNumbers;
}
console.log(range(2, 10, 2));
console.log(range(5, 2, -1));
