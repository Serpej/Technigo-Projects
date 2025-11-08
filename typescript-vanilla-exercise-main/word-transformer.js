const reverseWord = (wordValue) => wordValue.split('').reverse().join('');
const capitalizeWord = (wordValue) => wordValue.charAt(0).toUpperCase() + wordValue.slice(1).toLowerCase();
const repeatWord = (wordValue, paramValue) => wordValue.repeat(paramValue);
// catered for swedish - feel free to change 😊
const countVowels = (wordValue) => (wordValue.match(/[aeiouyåäö]/gi) || []).length;
// Check for correct types
const word = document.getElementById('word');
const wordValue = turnElementInputIntoString(word);
const operation = document.getElementById('operation');
const operationSelectElement = checkIfSelectElement(operation);
const param = document.getElementById('param');
const button = document.getElementById('transformButton');
const buttonElement = checkIfButtonElement(button);
const transformWord = (operationValue, wordValue, paramValue) => {
    switch (operationValue) {
        case 'reverse':
            return reverseWord(wordValue);
        case 'capitalize':
            return capitalizeWord(wordValue);
        case 'repeat':
            return repeatWord(wordValue, paramValue);
        case 'countVowels':
            return countVowels(wordValue);
        default:
            return "Invalid operation";
    }
};
function turnElementInputIntoString(variable) {
    if (variable instanceof HTMLInputElement) {
        return variable.value;
    }
    ;
    return '';
}
;
function turnElementSelectIntoString(variable) {
    if (variable instanceof HTMLSelectElement) {
        return variable.value;
    }
    ;
    return '';
}
;
function turnElementInputIntoNumber(variable) {
    if (variable instanceof HTMLInputElement) {
        return parseInt(variable.value);
    }
    ;
    return 0;
}
function checkIfString(variable) {
    if (typeof variable === "string") {
        return variable;
    }
    else if (typeof variable === "number") {
        return variable.toString();
    }
    return '';
}
function checkIfDivElement(variable) {
    if (variable instanceof HTMLDivElement) {
        return variable;
    }
    ;
    throw new Error(`Variable is not a HTMLDivElement`);
}
;
function checkIfSelectElement(variable) {
    if (variable instanceof HTMLSelectElement) {
        return variable;
    }
    ;
    throw new Error(`Variable is not a HTMLSelectElement`);
}
;
function checkIfButtonElement(variable) {
    if (variable instanceof HTMLButtonElement) {
        return variable;
    }
    ;
    throw new Error(`Variable is not a HTMLButtonElement`);
}
;
const runTransformation = () => {
    const wordValue = turnElementInputIntoString(word);
    const operationValue = turnElementSelectIntoString(operation);
    const paramValue = turnElementInputIntoNumber(param);
    const result = transformWord(operationValue, wordValue, paramValue);
    const resultAsString = checkIfString(result);
    const resultContainer = document.getElementById('result');
    const resultDiv = checkIfDivElement(resultContainer);
    resultDiv.textContent = `Result: ${resultAsString}`;
    resultDiv.classList.toggle('active', resultAsString !== '');
};
// Show/hide param input based on selected operation
operationSelectElement.addEventListener('change', function () {
    const paramContainer = document.getElementById('paramContainer');
    const paramDiv = checkIfDivElement(paramContainer);
    paramDiv.classList.toggle('active', this.value === 'repeat');
});
// Event listener for transform button
buttonElement.addEventListener('click', runTransformation);
export {};
//# sourceMappingURL=word-transformer.js.map