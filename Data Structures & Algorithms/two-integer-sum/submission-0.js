class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = nums.length;
        for (let i = 0; i < l; i++) {
            for (let j = i + 1; j < l; j++) {

                if (target - nums[i] == nums[j]) {
                    return [i, j];
                }
            }
        }
    }
}
