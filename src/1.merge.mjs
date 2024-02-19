/**
 * 合并两个有序数组
 * 
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
 * 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * 
 * 示例
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 * 
 * 题目链接：https://leetcode.cn/problems/merge-sorted-array
 */

// 合并+排序
export function merge1(nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m]
  }

  nums1.sort((a, b) => a - b)
}

// 双指针+额外空间
export function merge2(nums1, m, nums2, n) {
  let p1 = 0
  let p2 = 0
  const res = []

  while (p1 < m || p2 < n) {
    if (p1 >= m) {
      res.push(nums2[p2++])
    } else if (p2 >= n) {
      res.push(nums1[p1++])
    } else if (nums1[p1] > nums2[p2]) {
      res.push(nums2[p2++])
    } else {
      res.push(nums1[p1++])
    }
  }

  let i = 0
  while (i < m + n) {
    nums1[i] = res[i]
    i++
  }
}

// 双指针+O(1)空间
export function merge2(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let tail = nums1.length - 1
  let selectedN

  while (p1 >=0 || p2 >= 0) {
    switch (true) {
      case p1 === -1:
        selectedN = nums2[p2]
        p2--
        break
      case p2 === -1:
        selectedN = nums1[p1]
        p1--
        break
      case nums1[p1] > nums2[p2]:
        selectedN = nums1[p1]
        p1--
        break
      case nums1[p1] <= nums2[p2]:
        selectedN = nums2[p2]
        p2--
        break
    }
    nums1[tail] = selectedN
    tail--
  }
}