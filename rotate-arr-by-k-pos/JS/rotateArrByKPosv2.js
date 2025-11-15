// Task: Rotate an array by k positions

// --
// array for testing | this algorithm is in-place
// --
const arr = [1, 2, 3, 4, 5, 6, 7];

// Rotating using a temporary buffer (simplest logic)
function rotate(arr, k) {
    let length = arr.length;
    k = k % length;
    if (k < 0) { k += length; };
    
    let tmpArr = new Array(length);

    for (let i = 0; i < length; i++) {
        let newIndex = (i + k) % length;
        tmpArr[newIndex] = arr[i];
    }
    
    for (let i = 0; i < length; i++) { arr[i] = tmpArr[i] }; 
    return true;
}

if (rotate(arr, -3)) 
    console.log(arr);

/* if (rotate(arr, 3))
    console.log(arr); */
