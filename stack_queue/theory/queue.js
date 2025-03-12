/*
A Queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are inserted at the rear and removed from the front.

Queue Operations
enqueue(item) – Adds an element to the end of the queue.
dequeue() – Removes and returns the first element from the queue.
peek() – Returns the first element without removing it.
isEmpty() – Checks if the queue is empty.
size() – Returns the number of elements in the queue.
clear() – Removes all elements from the queue.
print() – Prints the elements of the queue.
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (!this.items.length) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (!this.items.length) {
      return null;
    }
    this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log("queue", this.items);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();

queue.dequeue();

queue.print();
