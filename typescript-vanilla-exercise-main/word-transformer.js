"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseWord = (word) => word.split('').reverse().join('');
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const repeatWord = (word, times) => word.repeat(times);
// catered for swedish - feel free to change 😊
const countVowels = (word) => (word.match(/[aeiouyåäö]/gi) || []).length;
const transformWord = (operation, word, param) => {
    switch (operation) {
        case 'reverse':
            return reverseWord(word);
        case 'capitalize':
            return capitalizeWord(word);
        case 'repeat':
            return repeatWord(word, param);
        case 'countVowels':
            return countVowels(word);
        default:
            return "Invalid operation";
    }
};
const runTransformation = () => {
    var _a, _b, _c;
    const word = ((_a = document.querySelector('#word')) === null || _a === void 0 ? void 0 : _a.value) || '';
    const operation = ((_b = document.querySelector('#operation')) === null || _b === void 0 ? void 0 : _b.value) || '';
    const param = parseInt(((_c = document.querySelector('#param')) === null || _c === void 0 ? void 0 : _c.value) || '');
    const result = transformWord(operation, word, param);
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.toggle('active', result !== '');
};
// Show/hide param input based on selected operation
document.getElementById('operation').addEventListener('change', function () {
    const paramContainer = document.getElementById('paramContainer');
    paramContainer.classList.toggle('active', this.value === 'repeat');
});
// Event listener for transform button
document.getElementById('transformButton').addEventListener('click', runTransformation);
//# sourceMappingURL=word-transformer.js.map