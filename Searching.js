//linear searching
function LinearSearch(list,num){
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i]==num) {
            console.log(`Element found at the position ${i}`)
            break;
        }           
    }
    if(i==list.length){
        console.log("Element not found")
    }
}
LinearSearch([10,50, 12,14,55],12);

//Binary Searching
function BinarySearch(list,num){
    let left = 0;
    let right = list.length -1;
    while(left<=right){
        let middle =Math.floor((left+right)/2);
        if(list[middle]==num){
            console.log(`Element found at the position ${middle}`);
            return middle;
        }
        else if(list[middle]>num){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    console.log("No Element fount")
    return -1;
    
}
BinarySearch([1,15,26,37,48,59,60],48);