// 单链表
class LinkNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.index = 0;
        this.len = 0;
    }
    append(val) {
        let node = new LinkNode(val); // 1 -> 2 -> 3
        if (!this.head) {
            this.head = node;
            this.len = 1;
        } else {
            let c = this.head;
            while (c.next) {
                c = c.next;
            }
            c.next = node;
            this.len++;
        }
    }
    delete(val) {
        if (!this.head) {
            return false;
        }
        let c = this.head;
        if (c.val === val) {
            this.head = null;
            this.len--;
            return true;
        }
        while (c.next) {
            if (c.next.val === val) {
                c.next = c.next.next;
                this.len--;
                return true;
            }
            c = c.next;
        }
        return false;
    }
    find(val) {
        if (!this.head) {
            this.index = -1;
            return null;
        }
        let c = this.head;
        if (c.val === val) {
            this.index = 0;
            return c;
        }
        while (c.next) {
            this.index++;
            if (c.next.val === val) {
                return c.next;
            }
            c = c.next;
        }
        this.index = -1;
        return null;
    }
    indexOf(val) {
        this.index = 0; // reset
        this.find(val);
        return this.index;
    }
    toStr() {
        let list = [];
        let c = this.head;
        while (c.next) {
            list.push(c.val);
            c = c.next;
        }
        list.push(c.val);
        list.push('null');
        console.log(list.join('->'));
    }
}


let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);




console.log(list.find(3));
console.log(list.indexOf(3));

list.delete(2);

console.log(list.len)

// console.log(JSON.stringify(list.head));

// list.toStr();

