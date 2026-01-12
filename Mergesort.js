function Meargesort(arr){
    let n  = arr.length;
    if(n <= 1)return arr;

    let mid = Math.floor(n/2);

    let left = Meargesort(arr.slice(0, mid));
    let right = Meargesort(arr.slice(mid));

    return merge(left , right);
}
function merge(left, right){
    let result =  [];
    let i = 0,j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return  result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(Meargesort([10,9,8,7,6,5,4,3,2,1,11]))