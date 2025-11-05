// Reverse an array in-place.

// Note: reversing in-place means reversing the original list.

// --
// Arrays for testing
// --

const arr = [1, 2, 3, 4, 5];

// while min index and max index are different we keep moving the to the center

function reverseArr(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(e => typeof(e) === 'number')) {
        console.error('error: invalid array');
        return undefined;
    }
    
    let minIndex = 0;
    let maxIndex = arr.length - 1;
    
    while (minIndex < maxIndex) {
        const temp = arr[minIndex];
        arr[minIndex] = arr[maxIndex];
        arr[maxIndex] = temp;
        minIndex++;
        maxIndex--;
    }
    return true;
}

let result = reverseArr(arr);
if (result) console.log(arr);
