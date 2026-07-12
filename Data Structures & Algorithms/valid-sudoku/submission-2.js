class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let c = {};
        let box = {};
        for (let j = 0; j <= board.length - 1; j++) {
            // console.log(Math.floor(j/3))
            let col = j; // Math.floor(j/3);
            let b = board[j];
            let rowSet = new Set();
            for (let i = 0; i <= b.length - 1; i++) {
                let counter = 0;
                let row = i; //Math.floor(i/3);

                let boxKey = Math.floor(row / 3) * 3 + Math.floor(col / 3); // col+''+row;
                // if(counter==2) row=0;
                if (!box[boxKey]) {
                    box[boxKey] = new Set();
                }

                // box[boxKey].push(b[row])
                if (b[row] != "." && box[boxKey].has(b[row])) {
                    console.log(b[row]);
                    return false;
                } else {
                    if (box[boxKey] != ".") {
                        box[boxKey].add(b[row]);
                    }
                }
                // console.log(boxKey)
                if (!c[i]) {
                    c[i] = new Set();
                }
                if (b[i]!="." && c[i].has(b[i])) {
                    return false;
                } else {
                    c[i].add(b[i]);
                }

                if (b[i]!="." && rowSet.has(b[i])) {
                    return false;
                } else {
                    rowSet.add(b[i]);
                }
            }
        }
        // console.log(c)

        return true;
    }
}
