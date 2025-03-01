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
 let check_selection = selection_sort(data);
 console.log(check_selection);
