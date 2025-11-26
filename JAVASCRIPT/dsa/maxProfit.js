

const maxProfit = (prices)=>{
    let maxProfit = prices[0];

    for(let i = 1; i<prices.length; i++){

        const currentPrice = prices[i];

        let minPrice = Math.min(minPrice, currentPrice);

        const potentialProfit = currentPrice - minPrice;

        let maxProfit = Math.max(maxProfit, potentialProfit);

    }
    return maxProfit;
}


const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices)); 














