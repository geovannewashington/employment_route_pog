// Task: Rotate an array by k positions

// --
// array for testing | this algorithm is in-place
// --
const arr = [1, 2, 3, 4, 5, 6, 7];

function rotateArray(arr, k) {
    // We cannot rotate an unary array
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(e => typeof(e) === 'number')) {
        console.error('error: invalid array');
        return false;
    }
    
    // define direction (usually when not given we asssume right)
    let rightDirection = true;
    let lastIndex = arr.length - 1;
    const tempArr = new Array(k);
    
    if (rightDirection) {
        for (let i = 0; i < k; i++) tempArr[i] = arr[lastIndex--];
        
        let pos = k;
        for (let i = 0; i < k; i++) {
            arr[pos++] = arr[i];
        }

        for (let i = 0; i < k; i++) {
            arr[i] = tempArr[i];
        }
    }
    
    return true;    
}

// Where k is 3
// Example: rotateArray(arr, 3) should change the original array to: [7, 6, 5, 1, 2, 3, 4]
if (rotateArray(arr, 3)) console.log(arr);

// if (rotateArray(arr, 2,)) console.log(arr);
// Expected Output: [3, 4, 5, 6, 7, 1, 2]
