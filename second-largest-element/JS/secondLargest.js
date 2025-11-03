const arr = [20, -5, 20, -22, 10, 50];

// Since if go through the array just once this is O(N) in time complexity
// We could also just use any builtin sort method an return arr[arr.lengtg - 2];
// But that would be suboptimal as the fastest sorting algorithm is O(N log N) 
// And we don't even need to have the array sorted
(function findSecondLargest() {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(e => typeof e === 'number')) {
        console.error('Invalid array');
        return;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const el of arr) {
        if (el > largest) {
            secondLargest = largest;
            largest = el;
        } else if (el < largest && el > secondLargest) {
            secondLargest = el;
        }
    }
    console.log(`Second largest element is: ${secondLargest}`);
})(arr);


