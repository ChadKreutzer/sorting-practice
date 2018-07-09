const expect = require('chai').expect;
const testArray = require('../testArray');

describe('testArray.random', function() {
    it('should be an array', function() {
        expect(testArray.random).to.be.a('array');
    });
    it('should not be in order', function() {
        expect(testArray.random).to.not.deep.equal(testArray.sorted);
    });
});
describe('testArray.sorted', function() {
    it('should be testArray.random but sorted', function() {
        expect(testArray.sorted).to.deep.equal([...testArray.random].sort((a, b) => a - b));
    });
});

describe('BubbleSort', function() {
    const bubbleSort = require('../bubbleSort');
    it('should sort an array', function() {
        expect(bubbleSort(testArray.random)).to.deep.equal(testArray.sorted);
    });
});

describe('mergeSort', function() {
    const mergeSortAlgorithm = require('../mergeSort');
    describe('merge', function() {
        const merge = mergeSortAlgorithm.merge;
        it('should merge two arrays of equal length', function() {
            expect(merge([1, 3, 5], [2, 4, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
        });
        it('should merge two arrays when the right one is longer', function() {
            expect(merge([1, 3], [2, 4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
        });
    });
    describe('mergeSort', function() {
        const mergeSort = mergeSortAlgorithm.mergeSort;
        it('should sort an array', function() {
            expect(mergeSort(testArray.random)).to.deep.equal(testArray.sorted);
        });
    });
});

describe('quickSort', function() {
    const quickSort = require('../quickSort');
    it('should sort an array', function() {
        expect(quickSort(testArray.random)).to.deep.equal(testArray.sorted);
    });
})