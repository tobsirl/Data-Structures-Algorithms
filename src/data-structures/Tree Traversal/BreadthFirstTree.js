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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  BFS() {
    let node = this.root; // assign node to the root node
    const data = []; // create a data array
    const queue = []; // create a queue array
    queue.push(node); // push the root node into the queue

    while (queue.length) {
      // while the queue isn't empty
      node = queue.shift(); // take from the beginning of the queue FIFO
      data.push(node.value); // add to the list that will be returned
      if (node.left) queue.push(node.left); // if there is a left add it to the queue
      if (node.right) queue.push(node.right); // if there is a right add it to the queue
    }
    return data;
  }

  DFSPreOrder() {
    const data = []; // create an array to store the data
    function traverse(node) {
      // helper function to traverse a tree
      data.push(node.value); // push the value into data
      if (node.left) traverse(node.left); // check for a left property, call traverse with the left node
      if (node.right) traverse(node.right); // check for a right property, call traverse with the right node
    }
    traverse(this.root); // call traverse with the current node
    return data; // return the data array
  }

  DFSPostOrder() {
    const data = []; // create an array to store the data
    function traverse(node) {
      // helper function to traverse a tree
      if (node.left) traverse(node.left); // check for a left property, call traverse with the left node
      if (node.right) traverse(node.right); // check for a right property, call traverse with the right node
      data.push(node.value); // push the value into data
    }
    traverse(this.root); // call traverse with the current node
    return data; // return the data array
  }
}
