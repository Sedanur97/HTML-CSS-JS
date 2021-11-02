/*
Write a JavaScript function to convert an amount of money to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
*/


function AmountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( AmountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return AmountTocoins(amount, coins);
        }
    }
} 
console.log(AmountTocoins(46, [25, 10, 5, 2,1]));
