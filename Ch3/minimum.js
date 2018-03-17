//Determines the lower value of 2 given numbers
function min(num1, num2)
{
  if(num1 < num2)
  {
    return num1;
  }
  else
  {
    return num2;
  }
}

//Calls min function to compare 0 and 10
console.log(min(0, 10));
