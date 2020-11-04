const maxProfit = function(input) {
  return Math.max(...input.map((elm, index) => 
    delta = Math.max(...input.slice(index)) - elm))
}

const prices = [110, 24, 35, 17, 140, 38, 251];

console.log(maxProfit(prices));
