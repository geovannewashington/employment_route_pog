// Task: Rotate an array by k positions

// --
// array for testing | this algorithm is in-place
// --
const arr = [1, 2, 3, 4, 5, 6, 7];

function rotate(arr, k) {
    let arr_length = arr.length; 
    k = k % arr_length;
    // Why modulo operator here?
    // Because any rotation by k positions is equivalent to rotating by the remainder when dividing 
    // k by the array lenght. Example: rotating an array of length 7 by: 7, 14, 21... produces the 
    // same array (full cycle)
    // Without this reduction the algorithm would perform unnecessary work
    if (k < 0) { k += arr.length; };
    // Why we're checking if k is negative here?
    // The sign of k represents the rotation in the opposite direciton.
    // A positive k usually means 'rotate right by k'.
    // A negative k usually means 'rotate left by |k|'
    // Example: k = -2 -> rotate left 2 -> same as rotate right (arr.length - 2)
    reverse(arr, 0, arr_length - 1); 
    reverse(arr, 0, k - 1); 
    reverse(arr, k, arr.length -1 ); 
    return true;
}

function reverse(arr, left, right) {
    while (left < right) {
        let tmp = arr[left];
        arr[left] = arr[right]; 
        arr[right] = tmp;
        left++;
        right--;
    }
}

if (rotate(arr, -3)) 
    console.log(arr);

/* if (rotate(arr, 3))
    console.log(arr); */
