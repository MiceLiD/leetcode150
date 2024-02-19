/**
 * 多数元素
 * 
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 示例 1：
 * 输入：nums = [3,2,3]
 * 输出：3
 * 
 * 示例 2：
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 题目链接：https://leetcode.cn/problems/majority-element/description
 */

// 相消法
export function majorityElement(nums) {
  // 初始设为首个元素
  let majorityEl = nums[0]
  // 计数
  let count = 0

  let i = 0
  while (i < nums.length) {
    // 消减为 0，多数元素易主
    if (count === 0) {
      majorityEl = nums[i]
    }
    // 遇多数元素 count 累加，遇非多数元素，消减 count
    if (majorityEl === nums[i]) {
      count++
    } else {
      count--
    }
    i++
  }
  return majorityEl
}