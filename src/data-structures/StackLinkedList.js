class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    // takes a value
    const newNode = new Node(value); // create a new node
    if (!this.first) {
      // check that the stack isn't empty
      this.first = newNode; // set this.first to newNode
      this.last = newNode; // set this.last to newNode
    } else {
      const temp = this.first; // create a temp variable
      this.first = newNode; // assign this.first to the newNode
      this.first.next = temp; // set the old node to the temp varialbe
    }
    this.size++; // increment the size
    return this.size; // return the size
  }

  pop() {
    if (!this.first) return null; // return null if the stack is empty
    const tempFirst = this.first; // create a temp variable to store this.first
    if (this.first === this.last) {
      // check for only one node
      this.last = null; // reset this.last to null
    }
    this.first = this.first.next; // update first
    this.size--; // decrement the size
    return tempFirst.value; // return the value in tempFirst
  }
}
