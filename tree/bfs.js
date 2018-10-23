// Breadth First Search

const { bt, nt } = require("./init");

// bfs
function bfs(root, res) {
    res = res || [root.val];
    let c = root.children;
    if (c.length === 0) return res;
    let k=0;
    for (k = 0; k < c.length; k++) {
        res.push(c[k].val);
    }
    for (k = 0; k < c.length; k++) {
        bfs(c[k], res);
    }
    return res;
}

console.log(bfs(nt));