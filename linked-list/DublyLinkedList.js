// 双链表
class DoublyLinkNode {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(val) {
        let newNode = new DoublyLinkNode(val);
        // 空链表
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode; // 更新
        }
        return newNode;
    }
    prepend(val) {
        // 空链表
        if (!this.head) {
            return this.append(val);
        }
        let newNode = new DoublyLinkNode(val, this.head);
        this.head.prev = newNode;
        this.head = newNode; // 更新
        return newNode;
    }
    find(val) {
        // 空链表
        if (!this.head) {
            return null;
        }
        // 队首
        if (this.head.val === val) {
            return this.head;
        }
        // 队尾
        if (this.tail.val === val) {
            return this.tail;
        }
        // 遍历
        let h = this.head;

        while (h.next) {
            if (h.next.val === val) {
                return h.next;
            }
            h = h.next;
        }
        return null;
    }
    remove(val) {
        let toDelNode = this.find(val);
        // 节点不存在
        if (!toDelNode) {
            return null;
        }
        // 队首
        if (this.head.val === val) {
            this.head = toDelNode.next;
            this.head.prev = null;
            return this.head;
        }
        // 队尾
        if (this.tail.val === val) {
            this.tail = toDelNode.prev;
            this.tail.next = null;
            return this.tail;
        }
        // 遍历
        let h = this.head;

        while (h.next) {
            if (h.next.val === val) {
                toDelNode.next.prev = h;
                h.next = toDelNode.next;
                return h.next;
            }
        }
        return null;
    }
    /**
     * 插入到指定值（prevVal）之后
     * @param {number} val 
     * @param {number} prevVal 
     */
    insert(val, prevVal) {
        // 空链表 || 队尾
        if (!this.head || this.tail.val === prevVal) {
            return this.append(val);
        }
        // 遍历
        let h = this.head;
        let newNode = new DoublyLinkNode(val);

        while (h) {
            if (h.val === prevVal) { // h ? n
                newNode.next = h.next;
                newNode.prev = h;
                newNode.next.prev = newNode;
                h.next = newNode;
                return newNode;
            }
            h = h.next;
        }
        return null;
    }
    toString() {
        let str='null<->';
        let c=this.head;
        while(c) {
            str+=`${c.val}<->`;
            c=c.next;
        }
        return str+='null';
    }
}

let list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);

// list.prepend(0);
// list.find(23);
// list.remove(2);
// list.insert(5, 3);
let r=list.toString();
console.log(r);