class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return true;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return false;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return true;
          } else {
            current = current.left;
          }
        }
        if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return true;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      if (val < current.val) current = current.left;
      if (val > current.val) current = current.right;
    }
    return false;
  }
}

let bst = new BST();
console.log(bst.insert(10));
console.log(bst.insert(5));
console.log(bst.insert(5));
console.log(bst.insert(16));

console.log(bst.find(5));
