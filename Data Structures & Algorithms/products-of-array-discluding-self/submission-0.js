class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let l = 1;
        let r = 1;
        let length = nums.length;
        // console.log(length)
        let left_prd = [];
        let right_prd = [];
        left_prd[0] = l;
        for (let i = 1; i < length; i++) {
            l = nums[i - 1] * l;
            left_prd[i] = l;
        }

        right_prd[length - 1] = 1;
        for (let i = length - 2; i >= 0; i--) {
            r = nums[i + 1] * r;
            right_prd[i] = r;
        }
        let output = [];

        for (let i = 0; i < length; i++) {
            output[i] = left_prd[i] * right_prd[i];
        }

        return output;
    }
}
