class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hasMap = new Map();
        for (let s of strs) {
            let key = s.split('').sort().join('');
            if (!hasMap.has(key)) {
                hasMap.set(key, [s])
            } else {
                hasMap.get(key).push(s);
            }
        }
        return [...hasMap.values()];
    }
}
