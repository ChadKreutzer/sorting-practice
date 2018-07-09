module.exports = function quickSort(arr) {
    if(arr.length < 2) return arr;
    const pivot = arr.shift();
    const smaller = [];
    const larger = [];
    
    arr.forEach(num => num < pivot ? smaller.push(num) : larger.push(num));
    return [...quickSort(smaller), pivot, ...quickSort(larger)];
};