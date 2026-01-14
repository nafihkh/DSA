function BobbleSort(arr){
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
    }
    console.log("Bubble Sort",arr)
}
BobbleSort([70,20,30,50,10,40,60]);
function SectionSort(arr){
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
    }
    console.log("Section Sort",arr)
}
SectionSort([70,20,30,50,10,40,60]);
function InsertionSort(arr){

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i -1;
        while(j>= 0 && arr[j]>temp){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1] = temp;        
    }
    console.log("InsertionSort",arr)

}
InsertionSort([70,20,30,50,10,40,60]);
let arr = [70,20,30,50,10,40,60];
let sort = MergeSort(arr);

function MergeSort(arr){
    let n = arr.length;
    if(n <= 1) return arr;

    let mid = Math.floor(n/2);
    let left = MergeSort(arr.slice(0,mid));
    let right = MergeSort(arr.slice(mid));

    return Merge(left ,right);
}
function Merge(left, right){
    let result = [];
    let  l = 0,r  = 0;
    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            result.push(left[l]);
            l++
        }
        else {
            result.push(right[r]);
            r++
        }
    }
    return result.concat(left.slice(l).concat(right.slice(r)))
}
console.log("Merge Sort",sort);
function QuickSort(arr){
    let n = arr.length;
    if(n <= 1) return arr
    let pivot = arr[n-1];
    let left = [];
    let right = [];

    for (let i = 0; i < n -1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    return [...QuickSort(left),pivot,...QuickSort(right)];
}
let qsort = MergeSort([70,20,30,50,10,40,60]);

console.log("QuickSort",qsort);