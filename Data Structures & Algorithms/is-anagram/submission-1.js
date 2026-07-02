class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sl = s.length;
        let tl = t.length;
        if (sl != tl) return false;
        const s_map = new Map();
        const t_map = new Map();
        for (let i = 0; i < sl; i++) {
            if (!s_map.has(s[i])) {
                s_map.set(s[i], 1);
            } else {
                s_map.set(s[i], s_map.get(s[i]) + 1);
            }
        }
        for (let i = 0; i < tl; i++) {
            if (!t_map.has(t[i])) {
                t_map.set(t[i], 1);
            } else {
                t_map.set(t[i], t_map.get(t[i]) + 1);
            }
        }

        let keys = t_map.keys();
        for (let k of keys) {
            if (t_map.get(k) != s_map.get(k)) return false
        }

        return true;
    }
}
