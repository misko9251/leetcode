// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    let maxProfit = 0;
    let currentPrice = prices[0]
    for(let i = 0; i < prices.length; i++){
        // If the current price is less than our variable, lets track it
        if(prices[i] < currentPrice){
            // Track lowest price
            currentPrice = prices[i]
            // If we don't need to update the lowest price, lets check the difference between the price and current price. If the difference is more than our variable maxProfit, lets update it with that value
        }else if(prices[i] - currentPrice > maxProfit){
            // Update maxProfit if true
            maxProfit = prices[i] - currentPrice
        }
    }
    // When loop is finished, return the maxProfit. If we were unable to achieve a profit, we return the default which is zero
    return maxProfit
};



maxProfit([7,1,5,3,6,4])