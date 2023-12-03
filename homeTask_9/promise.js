function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), getRandomIntInclusive(1, 5) * 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), getRandomIntInclusive(1, 5) * 1000)),
    new Promise(resolve => setTimeout(() => resolve(3), getRandomIntInclusive(1, 5) * 1000))
  ]).then(console.log); 

function getNum(min, max, timeout) {
    return new Promise(resolve => setTimeout(() => resolve(getRandomIntInclusive(min, max)), timeout));
}

async function square() {
    const result = await getNum(1, 5, 3000);
    console.log('square_result:', Math.pow(result, 2));
}

async function sum() {
    const result1 = await getNum(1, 5, 3000);
    const result2 = await getNum(6, 10, 5000);
    console.log('sum_result:', result1 + result2);
}

square();
sum();