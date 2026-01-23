let arr = [10,20,30,11,13,15];

function MergeSort(arr){
    let n = arr.length;
    if(n <= 1) return arr
    let mid = Math.floor(n/2);
    let left = MergeSort(arr.slice(0,mid));
    let right = MergeSort(arr.slice(mid));

    return Merge(left , right);
}
function Merge(left , right){
    let result = [];
    let l = 0,r =0;
    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            result.push(left[l]);
            l++;
        }
        else{
            result.push(right[r]);
            r++;
        }
    }
    return result.concat(left.slice(l).concat(right.slice(r)));
}
let result = MergeSort(arr);
console.log(result)