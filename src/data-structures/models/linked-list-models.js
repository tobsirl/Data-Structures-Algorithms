export class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

export class DoublyNode extends Node {
  // inherit the element and next properties
  constructor(element, next, prev) {
    // invoke the node constructor
    super(element, next);
    this.prev = prev;
  }
}
