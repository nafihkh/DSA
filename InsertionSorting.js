function InsertionSort(arr){
    for(let i = 1;i<arr.length;i++)//i =3
    {
        let temp = arr[i];//here temp is 10
        let j = i - 1;//here index -1
        while(j>=0 && arr[j]>temp){//here check j not less than 0 and 20>10 it true
            arr[j + 1] = arr[j];//it set 80 into 2 index
            j--;//decrement j now j is 1
        }
        arr[j+1]=temp;//it change the position of 70 into index 1
    }
    console.log(arr)
}
InsertionSort([20,70,80,10,30]);