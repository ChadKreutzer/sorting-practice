function merge(left, right) {
    const mergedArray = [];

    while (left.length && right.length) {
        left[0] > right[0]
            ? mergedArray.push(right.shift())
            : mergedArray.push(left.shift());
        
    }
    while (right.length) {
        mergedArray.push(right.shift());
    }
    return mergedArray;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const midpoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, midpoint);
    const right = arr.slice(midpoint);

    return merge(mergeSort(left), mergeSort(right));
}

module.exports = {
    merge,
    mergeSort
};