class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};
        for (let n of nums) {
            if (!countMap[n]) {
                countMap[n] = 1;
            } else {
                countMap[n]++;
            }
        }
        const sortedArray = Object.entries(countMap).sort((a, b) => {
            return b[1] - a[1];
        });
        sortedArray.splice(k);
        let output = [];
        for (let i = 0; i <= sortedArray.length - 1; i++) {
            output[i] = sortedArray[i][0];
        }

        return output;
    }
}
