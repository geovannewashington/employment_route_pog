// Task: move all zeros to the end of the array

// --
// array for testing | this algorithm is in-place and O(n)
// --
const arr = [0, 12, 5, -5, 1, 0, 10, 0, 5];

function moveZeros(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(e => typeof(e) === 'number')) {
        console.error('error: invalid array');
        return false;
    }
    
    let pos = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) arr[pos++] = arr[i];
    }
    
    while (pos < arr.length) arr[pos++] = 0;
    return true;    
}

if (moveZeros(arr)) console.log(arr);
