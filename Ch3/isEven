//Recursive function to determines if a given number is even
function isEven(num)
{
  //Gets the absolute value of the given number so that 
  //negative numbers can be checked by the recursive call
  var checkNum = Math.abs(num);
  var evenNum = true;
 
  if(checkNum == 0)
  {
    evenNum = true;
  }
  else if(checkNum == 1)
  {
    evenNum = false
  }
  else
  {
    evenNum = isEven(checkNum - 2)
  }
  return evenNum;  
}

console.log(isEven(-10));
