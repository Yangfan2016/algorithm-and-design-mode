// Breadth First Search

const { nt } = require("./init");

// bfs
function bfs(root) {
    let stack = []; // 结果栈
    if (root) { // 容错
        let queue = []; // 待插队列
        queue.unshift(root); // 先插入根节点
        while (queue.length > 0) { // 队列不为空时，执行如下
            let p = queue.shift(); // 获取并删除对首元素（即每个子树的父结点）
            stack.push(p.val); // 将其加入结果栈中
            for (let i = 0; i < p.children.length; i++) { // 然后将其所有的子结点插入到队列中
                queue.push(p.children[i]);
            }
        }
    }
    return stack;
}



let r = [];
r = bfs(nt);
console.log(r);