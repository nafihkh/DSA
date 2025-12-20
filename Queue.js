//Enqueue
function enqueue(data){
    if(IsFull())
    {
        return 0;
    }
    else{
        rear = rear + 1;
        queue[rear]=data;
        return 1;
    }
}
//Dequeue
function dequeue(){
    if(IsEmpty())
    {
        return 0;
    }
    else{
        let data = queue[front];
        front = front +1;
        return data;
    }
}