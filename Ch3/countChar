//Function to count the number of times "B" appears in a string
function countBs(testString)
{
  var Bs= 0;
  for(var i = 0; i < testString.length; i++)
  { 
    if(testString.charAt(i) == "B")
    {
      Bs++;
    }
  }
  return Bs;
}

//Function to count the number of times a char 'ch' appears in a string
function countChar(testString, ch)
{
  var chars = 0;
  for(var i = 0; i < testString.length; i++)
  {
    if(testString.charAt(i) == ch)
    {
      chars++;
    }
  }
  return chars;
}
console.log(countBs("BBC", "B"));
console.log(countChar("This is my testing string.", "t"));

//countBs function rewritten to make use of countChar function
function countBs(testString)
{
   return(countChar(testString, "B");
}
