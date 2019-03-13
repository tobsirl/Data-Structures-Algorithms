// !METHODS
// insert(key): This method inserts a new key in the tree
// search(key): This method searches for the key in the tree and returns true if it exists and false if the node does not exist
// inOrderTraverse(): This method visits all nodes of the tree using in-order traverse
// preOrderTraverse(): This method visits all nodes of the tree using pre-order traverse
// postOrderTraverse(): This method visits all the nodes of the tree using post-order traverse
// min(): This method returns the minimum value/key in the tree
// max(): This method returns the maximum value/key in the tree
// remove(key): This method removes the key from the tree

import { Compare, defaultCompare } from '../util';
import { Node } from './models/node';

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = undefined;
  }

  insert(key) {
    // special case: first key
    if (this.root == null) {
      // check if the tree is empty
      this.root = new Node(key); // point the root at the new node
    } else {
      this.insertNode(this.root, key); // use insertNode if the tree is not empty
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }
}
