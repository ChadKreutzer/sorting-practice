module.exports = function bubbleSort(arr) {
    let swapCheck = true;

    while (swapCheck) {
        swapCheck = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swapCheck = true;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
};
