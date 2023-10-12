const initialNumber = 66.656;
const partsNumber = 6;

const minInt = 1;

numberSplitter(getRandomIntInclusive, Math.floor(initialNumber), minInt);
numberSplitter(getRandomFractionalInclusive, +initialNumber.toFixed(2));

function numberSplitter(funcRandom, initialNumber, min = 0) {
    let max = initialNumber;
    let randomArray = Array(partsNumber).fill(0).map(() => {
        let randNumber = funcRandom(min, max);
        max -= randNumber;
        return randNumber;
    });

    let sumRandomArray = randomArray.reduce((sum, current) => +(sum + current).toFixed(2), 0);
    let difference = +(initialNumber - sumRandomArray).toFixed(2);

    if(difference !== 0) {
        randomArray = randomArray.map(item => {
            let tmpItem = +(difference + item).toFixed(2);
            if(tmpItem >= 0) {
                difference = 0;
                return tmpItem;
            }
            else {
                difference = +(difference + item).toFixed(2);
                return 0;
            }
        });
    }

    console.log(`${initialNumber} (parts: ${partsNumber}) -> `, randomArray);
}

function getRandomFractionalInclusive(min, max) {
    return +(Math.random() * (max - min + 1) + min).toFixed(2);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}