const { log } = console;
const maxProfit = (_priceArr) => {
  let _maxPro = 0;
  for (let _buy = 0; _buy < _priceArr.length; _buy++) {
    for (let _sell = _buy + 1; _sell < _priceArr.length; _sell++) {
      let _profit = priceArr[_sell] - priceArr[_buy]
      _maxPro = Math.max(_maxPro, _profit)
    }
  }
  return _maxPro
};

const priceArr = [7, 1, 5, 3, 6, 4]

log(maxProfit(priceArr)) // 5


const _maxProfit = (_prices) => {
  let _profit = 0;

  let _stockToBuy = _prices[0];

  for (let i = 1; i < _prices.length; i++) {
    if (_stockToBuy > _prices[i]) {
      _stockToBuy = _prices[i];
    }

    const _currentProfit = _prices[i] - _stockToBuy;

    if (_currentProfit > _profit) {
      _profit = _currentProfit;
    }
  }

  return _profit;
};

log(_maxProfit(priceArr)) // 5 
