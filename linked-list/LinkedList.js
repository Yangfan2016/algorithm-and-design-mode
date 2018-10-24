// 单链表
class LinkNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        /** 队首 */
        this.head = null;
        /** 队尾 */
        this.tail = null;
    }
    append(val) {
        let newNode = new LinkNode(val);
        if (!this.head) { // 链表为空时
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode; // 更新队尾
        }
        return newNode;
    }
    prepend(val) {
        let newNode = new LinkNode(val,this.head);
        // 空链表
        if (!this.head) { // 链表为空时
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
        }
        return newNode;
    }
    /**
     * 插入到指定值（prevVal）之后
     * @param {number} val 
     * @param {number} prevVal 
     */
    insert(val, prevVal) {
        // 队尾
        if (this.tail.val === prevVal) {
            return this.append(val);
        }
        let prevNode = this.find(prevVal);
        // 节点不存在
        if (!prevNode) {
            return this.append(val);
        }
        // 其他
        let newNode = new LinkNode(val);
        let c = this.head;
        while (c) {
            if (c.val === prevVal) {
                newNode.next = c.next;
                c.next = newNode;
                return newNode;
            }
            c = c.next;
        }
        return null;
    }
    remove(val) {
        let toDelNode = this.find(val);
        // 节点无效
        if (!toDelNode) {
            return null;
        }
        // 是队首       
        if (this.head.val === val) {
            this.head = toDelNode.next;
            return toDelNode;
        }
        // 其他
        let h = this.head;
        while (h.next) {
            if (h.next.val === val) {
                h.next = toDelNode.next;
                return toDelNode;
            }
            h = h.next;
        }
        return null;
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
        // 遍历
        let c = this.head;
        while (c.next) { // 只要下一个节点存在就循环
            if (c.next.val === val) {
                if (this.tail.val === val) { // 队尾
                    this.tail = c;
                }
                return c.next;
            }
            c = c.next; // 遍历指针移到下一个节点
        }
        // 其他
        return null;
    }
    toString() {
        let str='';
        let c=this.head;
        while(c) {
            str+=`${c.val}->`;
            c=c.next;
        }
        return str+='null';
    }
}


let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);


// list.find(1);
// list.remove(3);
// list.insert(5, 2);
// list.prepend(0);
// list.toString();
