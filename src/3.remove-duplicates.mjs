/**
 * 删除有序数组中的重复项 I
 * 
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 
 * 示例：
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 * 
 * 题目链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description
 */

export function removeDuplicates(nums) {
  let slow = 0
  let fast = 1

  while (fast < nums.length) {
    // 遇到不同元素
    if (nums[fast] !== nums[fast - 1]) {
      // 慢指针右移一位
      slow++
      // 覆盖元素
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}

