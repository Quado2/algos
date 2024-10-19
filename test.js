"use strict";
class LinkedNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
}
class CircularLinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new LinkedNode(value);
        if (!this.head) {
            this.head = newNode;
            newNode.setNext(this.head);
        }
        else {
            let current = this.head;
            while (current.getNext() !== this.head) {
                current = current.getNext();
            }
            current.setNext(newNode);
            newNode.setNext(this.head);
        }
    }
}
console.log("Working");
