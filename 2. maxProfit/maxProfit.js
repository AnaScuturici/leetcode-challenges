/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = (prices) => {
     // find highest num = difference between 2 nums
     // as long as the lower num is before the higher
    let min = prices[0]; // assume lower num is at lower index
    let maxProfit = 0; // initialize profit at 0 (i.e. no profit)
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i]; // update lower num
        }
        if(prices[i] > min && maxProfit < prices[i] - min){ 
            maxProfit = prices[i] - min; // update profit by deducting the lower num out of the higher one
        }
    }
    return maxProfit;
};

module.exports = { maxProfit };