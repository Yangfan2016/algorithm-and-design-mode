// Depth First Search

const { bt, nt } = require("./init");

// dfs
function dfs(root, stack) {
    stack = stack || []; // 结果栈
    if (root) { // 容错
        stack.push(root.val); // 将父结点插入结果栈
        for (let i = 0; i < root.children.length; i++) { // 将其所有子结点所在的树做同上操作
            dfs(root.children[i], stack);
        }
    }
    return stack;
}

// pre-order
function preOrder(root, stack) {
    stack = stack || [];
    if (root) {
        stack.push(root.val);
        if (root.left) preOrder(root.left, stack);
        if (root.right) preOrder(root.right, stack);
    }
    return stack;
}

// in-order
function inOrder(root, stack) {
    stack = stack || [];
    if (root) {
        if (root.left) inOrder(root.left, stack);
        stack.push(root.val);
        if (root.right) inOrder(root.right, stack);
    }
    return stack;
}

// post-order
function postOrder(root, stack) {
    stack = stack || [];
    if (root) {
        if (root.left) postOrder(root.left, stack);
        if (root.right) postOrder(root.right, stack);
        stack.push(root.val);
    }
    return stack;
}

let r = [];
// r = preOrder(bt); // [1, 2, 4, 8, 5, 3, 6, 7]
// r = inOrder(bt); // [8, 4, 2, 5, 1, 6, 3, 7]
// r = postOrder(bt); // [8, 4, 5, 2, 6, 7, 3, 1]
r = dfs(nt); // [1, 2, 5, 6, 3, 7, 8, 4]
console.log(r);

