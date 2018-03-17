//Variation 1 - Grid is preset to be 8 x 8
function chessBoard()
{
   var space = " ";             //Space character to be printed
   var hash = "#";              //Hash character to be printed
   var line = "";               //String to hold characters to be printed on each line
   
   //For each row
   for (var i = 0; i < 8; i++)
   {
     //For each column(or each position in the row)
     for(var j = 0; j < 8; j++)
     {
        //If this is an even-numbered row - 0, 2, 4 etc.
        if(i % 2 == 0)
        {
          //If this is an even-numbered position - 0, 2, 4, etc.
          if(j % 2 == 0)
          {
            //Add a space to the line string
            line += space;
          }
          //If this is an odd-numbered position
          else
          {
            //Add a hash to the line string
            line += hash;
          }
        }
        //If this is an odd-numbered row
        else
        {
          //If this is an even-numbered position - 1, 3, 5, etc.
          if(j % 2 == 0)
          {
            //Add a hash to the line string
            line += hash;
          }
          //If this is an odd-numbered position
          else
          {
            //Add a space to the line string
            line += space;
          }
        } 
     }
     //Print the line string
     console.log(line);
     //Clear the line string to prepare for next line
     line = "";
   }
}
//Call the chessBoard function
chessBoard();

//Variation 2 - Grid size is variable
function chessBoard()
{
   var space = " ";             //Space character to be printed
   var hash = "#";              //Hash character to be printed
   var line = "";               //String to hold characters to be printed on each line
   var size = 12;               //Variable to determine the size of the grid
   
   //Foe each row
   for (var i = 0; i < size; i++)
   {
     //For each column(or each position in the row)
     for(var j = 0; j < size; j++)
     {
        //If this is an even-numbered row - 0, 2, 4 etc.
        if(i % 2 == 0)
        {
          //If this is an even-numbered position - 0, 2, 4, etc.
          if(j % 2 == 0)
          {
            //Add a space to the line string
            line += space;
          }
          //If this is an odd-numbered position
          else
          {
            //Add a hash to the line string
            line += hash;
          }
        }
        //If this is an odd-numbered row
        else
        {
          //If this is an even-numbered position - 1, 3, 5, etc.
          if(j % 2 == 0)
          {
            //Add a hash to the line string
            line += hash;
          }
          //If this is an odd-numbered position
          else
          {
            //Add a space to the line string
            line += space;
          }
        } 
     }
     //Print the line string
     console.log(line);
     //Clear the line string to prepare for next line
     line = "";
   }
}
//Call the chessBoard function
chessBoard();
