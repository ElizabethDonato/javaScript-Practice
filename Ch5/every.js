//Function will check everl element of an array and return true only if every element passes the test condition
function every(array, test) {
   for(let element of array){
      //If the element does not pass the test, breaks out of the loop and returns false
      if(!test(element)){
         return false;
      }
   }
   //If every element of the array has passed the test, returns true
   return true;
}

//Test statements
console.log(every([1,3,5], n => n < 10));
console.log(every([2,4,16], n => n < 10));
console.log(every([], n => n < 10));
