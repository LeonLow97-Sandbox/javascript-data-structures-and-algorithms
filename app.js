// push, pop, shift, unshift, get, set, insert, remove, reverse

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return "The Singly Linked List has no nodes.";
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length == 0) {
      return "The Singly Linked List has no nodes.";
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    let oldHead = this.head;
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
    return this;
  }

  get(index) {
    if (!this.head) {
      return "The singly linked list contains no nodes.";
    }
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      count++;
      current = current.next;
    }
    return current;
  }

  set(index, val) {
    let current = this.get(index);
    if (!current) {
      return false;
    }
    current.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return Boolean(this.unshift(val));
    }

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  remove(index) {
    if (!this.head) {
      return "This SLL contains no nodes.";
    }
    if (index < 0 || index > this.length) {
      return `Index must be within 0 and ${this.length}`;
    }

    let prevNode = this.get(index - 1);
    let removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    return removeNode;
  }

  reverse() {
    if (!this.head) {
      return "The SLL contains no nodes.";
    }

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1001);
list.push(1002);
list.push(1003);
list.push(1004);
list.push(1005);

console.log(list.reverse());
console.log(list.print());
