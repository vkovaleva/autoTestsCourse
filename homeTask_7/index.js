const values = [0, 4, 3, 3, 1, 15, 7, 4, 19, 19, 0, 0];
const N = 3;
const M = 5;
const number1 = 6317;
const number2 = 1360;

console.log(arrReverse(values));
console.log(maxArrValue(values));
console.log(arrSortingAsc(values));
console.log(arrSortingDesc(values));
console.log(removeDuplicates(values));
console.log(findSimilarValuesAndPositions(number1, number2));
console.log(createFibonachiSequence(N, M));

function arrReverse(numbers) {
    return numbers.reverse();
}

function maxArrValue(numbers) {
    return Math.max(...numbers);
}

function arrSortingAsc(numbers) {  
    return numbers.sort((a, b) => a - b);
}

function arrSortingDesc(numbers) {
    return numbers.sort((a, b) => b - a);
}

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

function findSimilarValuesAndPositions(value1, value2) {
    const numbers1 = Array.from(String(value1));
    const numbers2 = Array.from(String(value2)); 
    let result = {
        valueAndPosition: 0,
        valueOnly: 0
    };
    numbers1.forEach((item, index) => {
        if(numbers2.indexOf(item) === index) result.valueAndPosition++;
        else if(numbers2.indexOf(item) > -1) result.valueOnly++;
    });
   
    return result;
 }

function createFibonachiSequence(startIndex, length) {
    let arrFibonachi = [];
    for(let i = startIndex; i < startIndex + length; i++) {
        arrFibonachi.push(getFibonachi(i));
    }
    
    return arrFibonachi;
}

function getFibonachi(number) {
    return number <= 1 ? number : getFibonachi(number - 1) + getFibonachi(number - 2);
}