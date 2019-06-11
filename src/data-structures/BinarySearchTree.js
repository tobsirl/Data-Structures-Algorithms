class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value); // create the new node
    if (this.root === null) { // check if the tree is empty
      this.root = newNode; // if empty assign the newNode to the root
      return this;
    }
    let current = this.root; // assign current to the root node
    while (true) {
      if (value === current.value) return undefined; // checks for duplicates
      if (value < current.value) { // check if the value is less than the current value
        if (current.left === null) { // if left node is empty
          current.left = newNode; // assign the current left to the newNode
          return this;
        }
        current = current.left; // update current to the left and repeat
      } else {
        if (current.right === null) { // if the right node is empty
          current.right = newNode; // assign the current right to the newNode
          return this;
        }
        current = current.right; // update current to the right and repeat
      }
    }
  }
}
