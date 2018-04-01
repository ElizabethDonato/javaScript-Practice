//Constants related to phone purchase
const TAX_RATE = 0.065;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 500;
const STARTING_BALANCE = 850;

//Variables relaed to phone purchase
var bankBalance = 850;
var purchasePrice = 0;
var totalPrice = 0;
var phonesPurchased = 0;
var accessoriesPurchased = 0;

//Loops to purchase phones and accessories until spending limit is reached
while(totalPrice < SPENDING_THRESHOLD){
   purchase_phone();
   //Purchases an accessory if spending limit has not been reached
   calculate_total();
   if(totalPrice < SPENDING_THRESHOLD){
      purchase_accessory();
   }
   calculate_total();
}

//Calculates new bank balance
calculate_balance();

//Formats moetary output
   bankBalance = format_output(bankBalance);
   totalPrice = format_output(totalPrice);

display_purchase_info();

//Adds the cost of the phone to the purchase price and increments phone purchase counter
function purchase_phone(){
   purchasePrice += PHONE_PRICE;
   phonesPurchased++;
}

//Adds the cost of the accessory to the purchase price and increments accessory purchase counter
function purchase_accessory(){
   purchasePrice += ACCESSORY_PRICE;
   accessoriesPurchased++;
}

//Calculates the total price, including tax
function calculate_total(){
   totalPrice = ((purchasePrice * (1 + TAX_RATE)));
}

//Calculates the bank balance remaining after purchase
function calculate_balance(){
   bankBalance -= totalPrice;
}

//Formats output
function format_output(value){
   return "$" + value.toFixed(2);
}

//Displays purchase information
function display_purchase_info(){
   console.log("Phones Purchased: " + phonesPurchased);
   console.log("Accessories Purcahsed: " + accessoriesPurchased);
   console.log("Total Price: " + totalPrice);
   console.log("Starting Bank Balance:  $" + STARTING_BALANCE);
   //Displays error message if buyer cannot afford 
   if(totalPrice > STARTING_BALANCE){
      console.log("You cannot afford this purchase.");
   }
   else{
   console.log("Ending Bank Balance: " + bankBalance);
   }
}


