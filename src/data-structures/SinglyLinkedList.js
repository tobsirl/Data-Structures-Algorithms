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
    const newNode = new Node(val); // create a new node passing in the value
    if (!this.head) { // if the list is empty set the head and tail to the new node
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // set the next node to the newNode
      this.tail = newNode; // update the tail to the newNode
    }
    this.length++; // increment the length
    return this;
  }

  pop() {
    if (!this.head) return undefined; // If there are no nodes in the list, return undefined
    // set two varibles to keep track, both point at the same node to begin with
    let current = this.head; // Points at the current node
    let newTail = current; // Both start at the same position in the LL
    while (current.next) {
      // while there is another node
      newTail = current; // newTail points to the previous node
      current = current.next; // current moves on to the next node
    }
    this.tail = newTail; // tail is now point to the new tail
    this.tail.next = null; // breaks the connection with the last node
    this.length--; // decrement length since node has been removed
    if (this.length === 0) {
      // when the list have zero nodes set the head and tail to null
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined; // If there are no nodes in the list, return undefined
    const currentHead = this.head; // create a varible to store the current head
    this.head = currentHead.next; // point this.head at the next node
    this.length--; // decrement length since a node has been removed
    if (this.length === 0) {
      // if the length is equal to zero, no nodes
      this.tail = null; // reset the tail
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val); // create a new node passing the val
    if (!this.head) {
      // check if there is no head
      // if no head is present set head and tail to the new node
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head; // point the newNode at the head
      this.head = newNode; // update the head to the newNode
    }
    this.length++; // increment the length
    return this; // return the linked list
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0; // setup a counter variable
    let current = this.head; // setup current and point it at the head
    while (counter !== index) {
      // while counter is not equal to index
      current = current.next; // move current through the SLL
      counter++;
    }
    return current; // return the current
  }

  set(index, val) {
    const foundNode = this.get(index); // use the get method to find the node
    if (foundNode) {
      // if the node is found
      foundNode.val = val; // assign it to val
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // last item use push
    if (index === 0) return !!this.unshift(val); // index 0 add to the front of the list

    const newNode = new Node(val); // create a new node
    const prev = this.get(index - 1); // connect prev to the node before
    const temp = prev.next; // create a temp variable to hold the previous value
    prev.next = newNode; // point the previous node to the new node
    newNode.next = temp; // assign the newnode to the temp variable
    this.length++; // increment the length
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); // romove the first node
    if (index === this.length - 1) return this.pop(); // remove the last node
    const previousNode = this.get(index - 1); // set prviousNode to the node one before
    const removed = previousNode.next; // removed stores the node to be removed
    previousNode.next = removed.next; // point the previous node to removed.next
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head; // create node variable and point it at the head
    this.head = this.tail; // swap the head and tail
    this.tail = node; // assign node to tail
    let next; // create a variable next
    let prev = null; // create a variable prev
    for (let i = 0; i < this.length; i++) {
      next = node.next; // point next at node.next
      node.next = prev; // we switch the arrow
      prev = node; // previous is set to node
      node = next; // node is assigned to next
    }
    return this;
  }

  print() {
    const arr = []; // setup an array
    let current = this.head; // create variable current and point at the head
    while (current) {
      // while current has a value
      arr.push(current.val); // add the current val to the array
      current = current.next; // move current to the next node
    }
    console.log(arr); // print out the contents of arr
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
