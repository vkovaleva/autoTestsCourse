const valueString = '18.18';
const valueBoolean = false;
const valueNumber = 1;


let sum = [valueString + valueBoolean, valueString + valueNumber, valueNumber + valueBoolean];
let multiplication = [valueString * valueBoolean, valueString * valueNumber, valueNumber * valueBoolean];
let division = [valueString / valueBoolean, valueString / valueNumber, valueNumber / valueBoolean];

console.log(`Sum: ${sum}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);

console.log(`Boolean to String: ${valueBoolean} -> ${String(valueBoolean)}`);
console.log(`Number to Boolean: ${valueNumber} -> ${Boolean(valueNumber)}`);
console.log(`String to Number using Number: ${valueString} -> ${Number(valueString)}`);
console.log(`String to Number using parseInt: ${valueString} -> ${parseInt(valueString)}`);