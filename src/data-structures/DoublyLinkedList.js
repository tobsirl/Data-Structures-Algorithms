class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value); // create the new node with the value passed in
    if (this.length === 0) {
      // check that the list isn't empty, checking length
      this.head = newNode; // point the head + tail at the new node
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // point the tail at the newNode
      newNode.prev = this.tail; // point the newNode at the previous
      this.tail = newNode; // make the newNode the tail
    }
    this.length++; // increment the length
    return this; // return the doubly linked list
  }

  pop() {
    if (!this.head) return undefined; // check if the list is empty
    const temp = this.tail; // create a temp variable to store the vaule of the node being removed
    if (this.length === 1) {
      // if the length is 1, make the head and tail null
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev; // make the previous node the new tail
      this.tail.next = null; // remove the pointers
      temp.prev = null;
    }
    this.length--; // decrement the list length
    return temp; // return the removed node
  }

  shift() {
    if (this.length === 0) return undefined; // check if the list is empty
    const temp = this.head; // create a temp variable to store the current head
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next; // sever the pointers to the old node
      this.head.prev = null;
      temp.next = null;
    }

    this.length--; // decrement the list length
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value); // create new node with the value
    if (this.length === 0) {
      // check if the list is empty, assign head/tail to null
      this.head = null;
      this.tail = null;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++; // increment the list
    return this;
  }
}

const LinkedList = new DoublyLinkedList();

LinkedList.push('One');
