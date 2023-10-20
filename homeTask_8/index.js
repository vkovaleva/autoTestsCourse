const str = '123421'
const number = 1000
const finalNumber = 50
const arrTest1 = [12, 15, 20, 25, 59, 79]
const arrTest2 = [1, 2, 3, 4, 5]
const arrTest3 = ['a', 'b', 'c', 'd', 'e', 'f']
const arrTest4 = [0, 4, 3, 3, 1, 15, 7, 4, 19, 19, 0, 0];

console.log(isStrPartsEqual(str));
console.log(calculateDivisionIteration(number, finalNumber));
console.log(calculateArithmeticMean(arrTest1));
console.log(arrayInsert(arrTest1, 2, 'a', 'b', 'c'));
console.log(arrayInsertOneByOne(arrTest2, arrTest3))
console.log(arrSortingAsc(arrTest4));
console.log(arrSortingDesc(arrTest4));

function isStrPartsEqual(str) {
    const firstPart = calculateSum(str, 0, 3);
    const secondPart = calculateSum(str, 3, 6);
    return firstPart === secondPart ? 'yes' : 'no';
}

function calculateSum(str, start, end) {
    return str.slice(start, end).split('').reduce((sum, current) => sum + +current, 0);
}

function calculateDivisionIteration(number, min) {
    let num = 0;
    while(number > min) {
        number = +(number / 2).toFixed(2);
        num++;
    }
    
    return `number: ${number}; num: ${num}`;
}

function calculateArithmeticMean(arr) {
    let sum = arr.reduce((sum, current) => sum + current, 0);
    return (sum / arr.length).toFixed(2);
}

function arrayInsert(arr, index, ...item) {
    arr.splice(index, 0, ...item);
    return arr;
}

function arrayInsertOneByOne(arr, arrInsert) {
    let combinedArr = [];
    while(arr.length && arrInsert.length) {
        combinedArr.push(arr.shift());
        combinedArr.push(arrInsert.shift());
    }

    !arr.length ? combinedArr.push(...arrInsert) : combinedArr.push(...arr);

    return combinedArr;
}

function arrSortingAsc(numbers) {  
    return numbers.sort((a, b) => a - b);
}

function arrSortingDesc(numbers) {
    return numbers.sort((a, b) => b - a);
}