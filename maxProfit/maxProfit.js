/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = (prices) => {
    const buy = Math.min(...prices);
    const sliced = prices.slice(prices.indexOf(buy));
    const sell = Math.max(...sliced);
    if(prices.indexOf(buy) === prices.length - 1){
        return 0;
    } else return sell - buy;
};

module.exports = { maxProfit };