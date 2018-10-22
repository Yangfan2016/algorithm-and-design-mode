// Depth First Search
/**
 *     1
 *   2    3
 *  4 5  6 7
 * 8 
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let t;
let len = arr.length;

t = new BinaryTree(1);
t.left = new BinaryTree(2);
t.right = new BinaryTree(3);
t.left.left = new BinaryTree(4);
t.left.right = new BinaryTree(5);
t.right.left = new BinaryTree(6);
t.right.right = new BinaryTree(7);
t.left.left.left = new BinaryTree(8);


console.log(t);
