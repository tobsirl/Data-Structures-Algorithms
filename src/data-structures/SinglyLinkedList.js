import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models';

//  export class Node {
//  constructor(element, next) {
//    this.element = element;
//    this.next = next;
//  }
// }

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
    this.count = 0;
    this.head = undefined;
  }

  // This method adds a new element to the end of the list.
  push(element) {
    const node = new Node(element); // Create a new Node and pass element to it
    let current;
    if (this.head == null) {
      // Check if the linked list is empty
      // catches null && undefined
      this.head = node;
    } else {
      current = this.head; // Reference to the first element
      while (current.next != null) {
        // loop through the list to get to the last one
        current = current.next; // last element found when current = undefined or null
      }
      current.next = node; // assign next to new element to make the link
    }
    this.count++; // increment the size of the list
  }

  // This method returns the element of a specific position in the list.
  // If the element does not exist in the list, it returns undefined.
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  // Removes a specific element from the linked list
  removeAt(index) {
    // check for out-of-bounds values
    if (index >= 0 && index <= this.count) {
      let current = this.head;

      // removing the first item
      if (index === 0) {
        this.head = current.head;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next; // link previous with current's next: skip it to remove
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  // Removes the first element from the linked list
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // Insert an element at a specific position
  insert(element, index) {
    // check for out of bounds values
    if (index >= 0 && index <= this.count) {
      const node = new Node(element); // Create a new node
      if (index === 0) {
        const current = this.head; // attach the node to the linked list.
        node.next = current; // pointer of the new node to the current
        this.head = node; // assign the value to the new node
      } else {
        const previous = this.getElementAt(index - 1); // find the position for insertion, one position before
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

// Udemy course
// piece of data - val
// reference to next node - next

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

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined; // If there are no nodes in the list, return undefined
    // set two varibles to keep track, both point at the same node to begin with
    let current = this.head; // Points at the current node
    let newTail = current; // Both start at the same position in the LL
    while (current.next) { // while there is another node
      newTail = current; // newTail points to the previous node
      current = current.next; // current moves on to the next node
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

const list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
