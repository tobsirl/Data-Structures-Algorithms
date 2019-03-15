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
      // check if node key is less than current node
      if (node.left == null) {
        // check if the left side is free
        node.left = new Node(key); // insert the new key into as the left node
      } else {
        this.insertNode(node.left, key); // descend a level in the tree and call insertNode recursively
      }
    } else if (node.right == null) {
      // if the node is greater than the current node key and there is no right child
      node.right = new Node(key); // insert the key into the right child
    } else {
      this.insertNode(node.right, key); // call the insertNode method recursively
    }
  }

  getRoot() {
    return this.root;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback); // helper method with a callback function
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) { // check if the tree node being passed is null
      this.inOrderTraverseNode(node.left, callback); // visit the left node
      callback(node.key); // visit the root node
      this.inOrderTraverseNode(node.right, callback); // visit the right node
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      return undefined;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // key is equal to node.item
    // handle 3 special conditions
    // 1 - a leaf node
    // 2 - a node with only 1 child
    // 3 - a node with 2 children
    // case 1
    if (node.left == null && node.right == null) {
      node = undefined;
      return node;
    }
    // case 2
    if (node.left == null) {
      node = node.right;
      return node;
    } if (node.right == null) {
      node = node.left;
      return node;
    }
    // case 3
    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}
