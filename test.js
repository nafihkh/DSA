function BinarySearch(arr,target){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid]===target){
            console.log(`Element found at the Index ${mid}`);
            return mid;
        }
        else if(target < arr[mid]){
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
}
BinarySearch([10,20,30,40,50],40);
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head  = null;
        this.tail = null;
    }

    push(data){
        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return
        }

        let current = this.head;

        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
        this.tail = newNode;
    }
    peek(){
        let current = this.head;

        while(current !== null){
            console.log(current.data);
            current = current.next
        }
    }
}
let list = new LinkedList();

list.push(10);
list.push(20);
list.peek();

function BubbleSort(arr){
    let n = arr.length-1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length ; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        
    }
    console.log("BubbleSort",arr);
}
BubbleSort([30,20,40,50,10]);
function SectionSort(arr){
    let n = arr.length-1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length ; j++) {
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
    }
    console.log("SectionSort",arr);
}
SectionSort([30,20,40,50,10]);
function Insertion(arr){
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
        
    }
    console.log("Insertion",arr);
}
Insertion([30,20,40,50,10]);
function MergeSort(arr){
    let n = arr.length;
    if(n <= 1) return arr;

    let mid = Math.floor(n/2);
    let left = MergeSort(arr.slice(0,mid));
    let right = MergeSort(arr.slice(mid));

    return Merge(left , right);
    
}
function Merge(left,right){
    let result = [];
    let l = 0,r = 0;
    while(l < left.length  && r < right.length){
        if(left[l] < right[r])
        {
            result.push(left[l]);
            l++
        }
        else {
            result.push(right[r]);
            r++
        }
    }
    return result.concat(left.slice(l).concat(right.slice(r)));

}
let arr = [30,20,40,50,10];
let sort = MergeSort(arr);
console.log("MergeSort",sort);
function QuickSort(arr){
    let n = arr.length;
    if(n <= 1) return arr;

    let pivot = arr[n - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < n -1; i++) {
        if(arr[i] < pivot)
        {
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }

    return [...QuickSort(left),pivot,...QuickSort(right)];
    
}
let ar = [30,20,40,50,10];
let qsort = QuickSort(ar);
console.log("QuickSort",qsort);

class Stack{
    constructor(){
        this.items = [];
    }

    push(data){
        this.items.push(data)
    }
    peek(){
        console.log(this.items[this.items.length -1]);
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.peek();

class Queue{
    constructor(){
        this.items = [];
    }

    enque(data){
        this.items.push(data);
    }
    dequeue(){
        if(this.isEmpty())
        {
            return console.log("Que is empty");
        }
        return this.items.shift();
    }
    isEmpty() {
        this.items.length === 0;
    }
    peek(){
        console.log(this.items.join("<-"))
    }
}
let queue = new Queue();
queue.enque(10);
queue.enque(20);
queue.enque(30);
queue.enque(40);
queue.dequeue();
queue.peek();


function count(num){
    if(num <= 0) return num;
    console.log(num);
    count(num - 1);

}
count(5)