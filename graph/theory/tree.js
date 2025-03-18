class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const newNode = new Node(data);

    // root = null
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const curNode = this.root;
    const parentNode = null;
    while (curNode) {
      parentNode = curNode;
      if (data < curNode.data) {
        curNode = curNode.left;
      }
      if (data > curNode.data) {
        curNode = curNode.right;
      }
    }
    if (data < parentNode.data) parentNode.left = newNode;
    if (data > parentNode.data) parentNode.right = newNode;
  }

  find(data) {
    const curNode = this.root;
    while (curNode !== null) {
      if (curNode === data) return curNode;
      if (data < curNode.data) {
        curNode = curNode.left;
      }
      if (data > curNode) {
        curNode = curNode.right;
      }
    }
    return curNode;
  }

  findMax() {
    const curNode = this.root;
    if (curNode === null) return null;
    while (curNode) {
      curNode = curNode.right;
    }
    return curNode.data;
  }

  findMin() {
    const curNode = this.root;
    if (curNode === null) return null;
    while (curNode) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  isPresent(data) {
    return this.find(data) !== null;
  }
}
