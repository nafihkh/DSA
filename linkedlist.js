class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }

    append(data){
        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
    printlist(){
        let current = this.head;

        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }

}
let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);



list.printlist();