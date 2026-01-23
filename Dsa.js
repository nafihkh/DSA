class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    push(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode
            return;
        }
        
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
    peek(){
        let current = this.head;

        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}
let linkedlist = new LinkedList();
linkedlist.push(10);
linkedlist.push(20);
linkedlist.peek();

class Stack{
    constructor(){
        this.items = [];
    }

    push(data){
        this.items.push(data);
    }
    peek(){
        console.log(this.items[this.items.length -1]);
    }
    pop(){
        if(this.items.length === 0){
            console.log("Stack Is Empty")
        }
        return this.items.pop();
    }
   

}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.peek();
class Queue {
    constructor(){
        this.items = [];
    }

    enque(data){
        this.items.push(data);
    }
    deque(){
        if(this.items.length === 0) console.log("Queue is empty")
        return this.items.shift()
    }
    printlist(){
        console.log(this.items.join(" <- "));
    }
}
let queue = new Queue();
queue.enque(10);
queue.enque(20);
queue.enque(30);

queue.printlist();
