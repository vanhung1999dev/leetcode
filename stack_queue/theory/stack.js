/*
What is a Stack?
A stack is a linear data structure that allows operations to be performed at one end, called the top. The two primary operations are:

Push: Adds an element to the top of the stack.
Pop: Removes and returns the top element from the stack.
*/

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(data) {
    this.items.push(data);
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    this.size--;
    return this.items.pop();
  }

  peek() {
    if (this.size === 0) {
      return null;
    }
    return this.items[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);

const data = stack.pop();

stack.pop();
