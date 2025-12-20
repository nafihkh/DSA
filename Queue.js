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