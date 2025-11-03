const arr = [20, -5, 20, -22, 10, 50];

(function findSecondSmallest() {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(e => typeof e === 'number')) {
        console.error('Invalid array');
        return;
    }
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const el of arr) {
        if (el < smallest) {
            secondSmallest = smallest;
            smallest = el;
        } else if (el > smallest && el < secondSmallest) {
            secondLargest = el;
        }
    }
    console.log(`Second smallest element is: ${secondSmallest}`);
})(arr);
