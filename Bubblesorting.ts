interface arrayType {
    array:number[]
    target:number
}
function linearSearch(arr:arrayType){
    let i;
    for(i = 0;i<arr.array.length;i++){
        if(arr.array[i]==arr.target)
        {
            console.log(`the element fount at the index ${i}`)
            break;
        }
    }
    if(i == arr.array.length)
    {
        console.log("not found")
    }
}
let search = {
    array:[1,2,3,4,6],
    target:3

}
linearSearch(search);

function Binarysearch(arr:arrayType){
    let left:number = 0;
    let right:number = arr.array.length;
    while(left <= right){
        let middle:number = Math.floor((left+right)/2);
        if(arr.target == arr.array[middle])
        {
            console.log(`element fount at the index ${middle}`)
            return middle
        }
        else if(arr.array[middle]>arr.target)
        {
            right = middle-1
        }
        else {
            left = middle + 1
        }
    }
    console.log("Element not found")
    return -1;
}
Binarysearch(search);