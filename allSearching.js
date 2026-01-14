function LinearSearch(arr,target){
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] === target)
       {
        console.log(`Element found at Index ${i}`)
       }
        
    }
}
LinearSearch([10,30,20,40,50],20)

function BinarySearch(arr,target){
    let n = arr.length;

    let left = 0;
    let right = n -1 ;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target){
            console.log(`Element Found At the Index ${mid}`);
            return mid;
        }
        else if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }

    }
   
}
BinarySearch([10,30,20,40,50],20)