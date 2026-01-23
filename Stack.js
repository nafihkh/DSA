class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }

    print(){
        console.log(this.items);
    }
    pop(element){
        this.items.pop(element)
    }

}
let s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.pop(20)
s.print();