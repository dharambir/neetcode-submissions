class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        function isValidChar(c) {
            // console.log(c)
            return ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= 0 && c <= 9)) && c!=" ";
        }
        let newStr = "";
        while (l <= s.length - 1) {
            if (isValidChar(s[l])) {
                newStr = newStr + s[l];
            }
            l++;
        }
        let newStrReverse = "";
        while (r >= 0) {
            if (isValidChar(s[r])) {
                newStrReverse = newStrReverse + s[r];
            }
            r--;
        }
        return newStr.toLowerCase() === newStrReverse.toLowerCase();
    }
}
