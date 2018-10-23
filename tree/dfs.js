// Depth First Search

const { bt, nt } = require("./init");

// dfs
function dfs(root, res) {
    res = res || [];
    if (root) {
        res.push(root.val);
        for (let i = 0; i < root.children.length; i++) {
            dfs(root.children[i], res);
        }
    }
    return res;
}

// pre-order
function preOrder(root, res) {
    res = res || [];
    if (root) {
        res.push(root.val);
        if (root.left) preOrder(root.left, res);
        if (root.right) preOrder(root.right, res);
    }
    return res;
}

// in-order
function inOrder(root, res) {
    res = res || [];
    if (root) {
        if (root.left) inOrder(root.left, res);
        res.push(root.val);
        if (root.right) inOrder(root.right, res);
    }
    return res;
}

// post-order
function postOrder(root, res) {
    res = res || [];
    if (root) {
        if (root.left) postOrder(root.left, res);
        if (root.right) postOrder(root.right, res);
        res.push(root.val);
    }
    return res;
}

let r = [];
// r = preOrder(bt); // [1, 2, 4, 8, 5, 3, 6, 7]
// r = inOrder(bt); // [8, 4, 2, 5, 1, 6, 3, 7]
// r = postOrder(bt); // [8, 4, 5, 2, 6, 7, 3, 1]
r=dfs(nt); // [1, 2, 5, 6, 3, 7, 8, 4]
console.log(r);

