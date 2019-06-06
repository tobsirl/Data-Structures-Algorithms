class Node {
  constructor() {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value); // create a new node
    if (!this.first) {
      // check that the queue isn't empty
      this.first = newNode; // assign first to the new node
      this.last = newNode; // assign last to the new node
    } else {
      this.last.next = newNode; // attach the pointer to the new node
      this.last = newNode; // assign the value to the new node
    }
    this.size++; // increment the size
    return this.size; // return the size
  }

  dequeue() {}
}
