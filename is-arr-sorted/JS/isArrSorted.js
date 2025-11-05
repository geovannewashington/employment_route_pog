// Check if an array is sorted.

// --
// Arrays for testing
// --
const unsortedArr = [10, 20, -5, -10, 50];
const sortedArr = [10, 20, 30, 40, 50];

// How do we check if array is sorted?
// I guess first we need to define whether the array is increasing or decreasing

function isArrSorted(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(e => typeof(e) === 'number')) {
        console.error('error: invalid array');
        return undefined;
    }
    
    let increasing = arr[0] < arr[arr.length -1];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (increasing) {
            if (arr[i] > arr[i + 1]) return false;
        } else {
            if (arr[i] < arr[i + 1]) return false;
        }
    }
    return true;
}

let result = isArrSorted(sortedArr);
(result && result !== undefined ) ? 
    console.log('Yes, array is sorted') : 
    console.log('No, array is unsorted');

result = isArrSorted(unsortedArr);
(result && result !== undefined ) ? 
    console.log('Yes, array is sorted') : 
    console.log('No, array is unsorted');
