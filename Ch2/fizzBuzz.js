//Version 1 prints numbers 1-100 printing Fizz in place of all numbers divisible by 3
//and Buzz in place of all numbers divisible by 5
function printNums()
{
   for (var n = 1; n < 101; n ++)
   {
     if(n % 3 == 0)
     {
     	 console.log("Fizz");
     }
     else if (n % 5 == 0)
     {
     	 console.log("Buzz");
     }
     else
     {
       console.log(n)
     }
   }
}

printNums();

//Version 2 prints numbers 1-100 printing FizzBuzz in place of all numbers divisible by 3 and 5
//and Fizz in place of all numbers divisible by 3 and not 5 and Buzz in place of all numbers 
//divisible by 5 and not 3
function printNums()
{
   for (var n = 1; n < 101; n ++)
   {
     if((n % 3 == 0) && (n % 5 == 0))
     {
       console.log("FizzBuzz");
     }
     else if(n % 3 == 0)
     {
     	 console.log("Fizz");
     }
     else if (n % 5 == 0)
     {
     	 console.log("Buzz");
     }
     else
     {
       console.log(n)
     }
   }
}

printNums();
