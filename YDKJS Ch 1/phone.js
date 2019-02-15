/*********************************************************
 * Program Name: Phone Purchase
 * Author: Elizabeth Donato
 * Date: 14 February 2019
 * Description: This program determines if a user can
 * 		purchase phones and accesories based on
 * 		funds remaining in the user's bank account.
*********************************************************/

//Constant values to be used for calculations
const TAX_RATE = 0.075;
const PHONE_PRICE = 149.99;
const ACC_PRICE = 15.99;

//Variables to be used for calculations
var accountBalance = prompt("Current Account Balance: ");
var spendingLimit = (accountBalance * 0.75);
var amountSpent = 0;
var phonesPurchased = 0;
var accPurchased = 0;
var totalTax = 0;

//Purchase phones and accesories
while((amountSpent + PHONE_PRICE) < spendingLimit)
{
   //Purchase a phone
   accountBalance -=PHONE_PRICE;		//Deduct phone price from account balance
   amountSpent +=PHONE_PRICE;			//Add phone price to amount spent 
   phonesPurchased++;				//Add 1 to the number of phones purchased

   //Purchases an accessory if it does not go over the spending limit
   if((amountSpent + ACC_PRICE) < spendingLimit)
   {
      accountBalance -=ACC_PRICE;		//Deduct acc price from account balance
      amountSpent +=ACC_PRICE;			//Add acc price to amount spent
      accPurchased++;				//Add 1 to the number of acc purchased
   }  
}

//Calculate total price including taxes
totalTax = calcTax(amountSpent);
amountSpent +=totalTax;

//Prints Purchase Report
console.log ("Phones Purchased: " + String(phonesPurchased));
console.log ("Accessories Purchased: " + String(accPurchased));
console.log ("Total Cost: " + formatAmount(amountSpent));

//Determines if purchase can be made
if(accountBalance >= 0)
{
   console.log ("Purchase has been completed.");
} 

else
{
   console.log("Insufficient funds.  Purchase cannot be completed.");
}

/*********************************************************
 * 			totalTax()			*
 * 							*
 * This function calculates the total tax on the 	*
 * purchased items.					*
 * 							*
 * Accepts: amountSpent					*
 * 							*
 * Returns: Total tax on purchases			*
 * 							*
*********************************************************/
function calcTax(amountSpent)
{
   var tax = amountSpent * TAX_RATE;
   return tax;
}

/*********************************************************
 * 			formatAmount()			*
 * 							*
 * This function formats the output for the display	*
 * 							*
 * Accepts: amountSpent					*
 * 							*
 * Returns: formatted amountSpent			*
 * 							*
*********************************************************/
function formatAmount(amountSpent)
{
   return "$" + amountSpent.toFixed(2);
}
