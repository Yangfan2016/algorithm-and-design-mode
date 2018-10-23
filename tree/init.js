/**
 *            1
 *      2     3      4  
 *    5   6   7  8  9
 *   10  11 12
 * 
 */
class Tree {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}
/**
 *     1
 *   2    3
 *  4 5  6 7
 * 8 
 */
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function makeBinaryTree(p, root) {
    let l = 2 * p + 1;
    let r = l + 1;
    if (l >= list.length) return;
    if (l < list.length) root.left = new BinaryTree(list[l]);
    if (r < list.length) root.right = new BinaryTree(list[r]);
    makeBinaryTree(l, root.left);
    makeBinaryTree(r, root.right);
}


let list = [1, 2, 3, 4, 5, 6, 7, 8];
let bt = new BinaryTree(list[0]);

makeBinaryTree(0, bt);


let nt = new Tree(1);
let c1 = new Tree(2);
let c2 = new Tree(3);
let c3 = new Tree(4);
let c4 = new Tree(5);
let c5 = new Tree(6);
let c6 = new Tree(7);
let c7 = new Tree(8);
let c8 = new Tree(9);
let c9 = new Tree(10);
let c10 = new Tree(11);
let c11 = new Tree(12);

nt.children = [c1, c2, c3];
c1.children = [c4, c5];
c2.children = [c6, c7];
c3.children = [c8];
c4.children = [c9];
c5.children = [c10];
c6.children = [c11];

module.exports = {
    bt,
    nt,
};
