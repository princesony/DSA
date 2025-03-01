Sorting Algorithms in JavaScript
This repository contains implementations of various sorting algorithms in JavaScript. The algorithms include Bubble Sort, Selection Sort, and Merge Sort.

Algorithms
1. Bubble Sort
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process continues until the list is sorted.

Code:
javascript
Copy code
let bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            }
        }
    }
    return arr;
}
Example:
javascript
Copy code
let data = [90, 20, 50, 60];
let sorted_data = bubble_sort(data);
console.log(sorted_data); // Output: [20, 50, 60, 90]
2. Selection Sort
Selection Sort works by dividing the array into two parts: a sorted part and an unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the leftmost unsorted element.

Code:
javascript
Copy code
let selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        if (arr[i] !== arr[min_index]) {
            [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
        }
    }
    return arr;
}
Example:
javascript
Copy code
let data = [90, 20, 50, 60];
let sorted_data = selection_sort(data);
console.log(sorted_data); // Output: [20, 50, 60, 90]
3. Merge Sort
Merge Sort is a divide-and-conquer algorithm. It recursively divides the array into two halves, sorts each half, and then merges the sorted halves back together.

Code:
javascript
Copy code
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

    merged = merged.concat(left.slice(left_index)).concat(right.slice(right_index));
    return merged;
}
Example:
javascript
Copy code
let data = [90, 20, 50, 60];
let sorted_data = merge_sort(data);
console.log(sorted_data); // Output: [20, 50, 60, 90]
How to Run
Clone this repository to your local machine.
Open the index.html file (or use any JS editor) and run the JavaScript code.
You will see the sorted arrays printed to the console.
License
This project is open-source and available under the MIT License.

