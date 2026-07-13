class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count=0;
        let maxCount=0;
        nums.sort((a,b)=>a-b);
        let left=0;
        let right=1;
        let length=nums.length;
        // console.log(length)
        if(length==0) return 0;
        while(right<=length-1){
            if(nums[left]+1==nums[right] || nums[left]==nums[right]){
                if (nums[left]!=nums[right]) {
                    count++;
                }
            }else{
                count=0;
            }
            maxCount=Math.max(maxCount,count)
            
            left++
            right++
        }
        console.log(nums)
        return maxCount+1;
    }
}
