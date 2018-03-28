//Function receives a starting value, a test condition, a body action, and an update action
function loop(start, test, body, update) {
   let value = start;
   //Loops based on starting value
   for(let i = 0; i < start; i++){
      //If test condition is met
      if(test(value)){
         //Execute body action
         body(value);
         //Execute update action to update value
         value = update(value);
      }
   }
}

loop(3, n => n > 0, console.log, n => n-1);
