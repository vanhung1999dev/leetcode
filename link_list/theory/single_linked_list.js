class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert to first position
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert to last position
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
  // insert at
  insertAt(data, index) {
    // out of range
    if (index > this.size || index < 0) {
      return;
    }

    const node = new Node(data);
    // index === 0
    if (index === 0) this.insertFirst(data);

    let previous, current;

    // Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // get list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // clear
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();

ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertFirst(4);

ll.insertLast(0);

ll.insertAt(6, 3);

ll.printListData();
