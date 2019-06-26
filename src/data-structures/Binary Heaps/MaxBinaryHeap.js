class MaxBinaryHeap {
  constructor() {
    this.values = []; // values empty array
  }

  insert(element) {
    this.values.push(element); // take a value and add it to the end of the array
    this.bubbleUp(); // call the bubble up method
  }

  bubbleUp() {
    let idx = this.values.length - 1; // location of the newly inserted item
    const element = this.values[idx]; // store the value at the index
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2); // find the parent using the formula
      const parent = this.values[parentIdx]; // value at the parent index
      if (element <= parent) break; // compare the elements break if the parent isn't less then or equal
      this.values[parentIdx] = element; // swap the elements
      this.values[idx] = parent; // swap the elements
      idx = parentIdx; // update index to the parent index
    }
  }
}
