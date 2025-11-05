// Find the mininum and maximum element in a array

// --
// Arrays for testing
// --

const arr = [10, 20, -5, -10, 50];
const arr2 = [10, 20, -5, -10, 50];

// This is a linear search and time complexity for it is O(n);
// where n is the total number of elements in the original array
// We could use a sorting builtin method and return the first element but that would not be optimal
// since the best general-purpse sorting algorithm time complexity is O(n log n)
function findMin(arr) {
    // General checking     
    // this is saying: array needs to be an actual array 
    // it needs to have at least one element  
    // every element need to be a number
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(e => typeof(e) === 'number')) {
        console.error('Invalid array');
        return undefined;
    }
    let min = +Infinity;
    
    for (const el of arr) {
        if (el < min) min = el;
    }
    return min;
}

let result = findMin(arr);
if (result !== undefined) console.log('The mininum element is:', result); // -> -10

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(e => typeof(e) === 'number')) {
        console.error('Invalid array');
        return undefined;
    }
    let max = -Infinity;
    
    for (const el of arr) {
        if (el > max) max = el;
    }
    return max;
}

result = findMax(arr);
if (result !== undefined) console.log('The maximum element is:', result); // -> 50
