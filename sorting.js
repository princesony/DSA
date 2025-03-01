let data = [90, 20, 50, 60];

// bubble sort in js

let bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {  // Compare adjacent elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap the elements
            }
        }
    }
    return arr;
  }

// let check_bubble = bubble_sort(data);
// console.log(check_bubble);


let selection_sort = (arr)=>{
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        console.log(min_index)
          if(arr[i] !== arr[min_index]){
            [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
          }
        }
        return arr
}
//  let check_selection = selection_sort(data);
//  console.log(check_selection);


let inseration_sort = (arr)=>{
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
//  let check_inseration = inseration_sort(data);
//  console.log(check_inseration);


let merge_sort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left_half = arr.slice(0, mid);
    let right_half = arr.slice(mid);
    return merge(merge_sort(left_half), merge_sort(right_half));
}

let merge = (left, right) => {
    let merged = [];
    let left_index = 0;
    let right_index = 0;

    while (left_index < left.length && right_index < right.length) {
        if (left[left_index] <= right[right_index]) {
            merged.push(left[left_index]);
            left_index++;
        } else {
            merged.push(right[right_index]);
            right_index++;
        }
    }

    // Add any remaining elements from left or right
    merged = merged.concat(left.slice(left_index)).concat(right.slice(right_index));
    return merged;  // Correct the return value here
}


// let check_merge = merge_sort(data);
// console.log(check_merge);


let quick_sort = (arr)=>{
    if(arr.length<=1){
        return arr;
    }
    let pivot = arr[Math.floor(arr.length/2)];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else if(arr[i]>pivot){
            right.push(arr[i]);
        }
    }
    return quick_sort(left).concat([pivot],quick_sort(right));
}

 let check_quick = quick_sort(data);
 console.log(check_quick);