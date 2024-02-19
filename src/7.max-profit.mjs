// 买卖股票的最佳时机I
// 题目链接：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description

export function maxProfit(prices) {
  // 历史最低价
  let minProfit = Infinity
  // 最大收益
  let maxProfit = 0
  let i = 0

  while (i < prices.length) {
    const curPrice = prices[i]
    // 替换历史最低价
    if (curPrice < minProfit) {
      minProfit = curPrice
    }
    // 每天考虑一个问题：是否利润最大
    const profit = curPrice - minProfit
    if (profit > maxProfit) {
      maxProfit = profit
    }
    i++
  }
  return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))