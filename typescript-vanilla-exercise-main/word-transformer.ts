const reverseWord = (wordValue: string) => wordValue.split('').reverse().join('');

const capitalizeWord = (wordValue: string) => wordValue.charAt(0).toUpperCase() + wordValue.slice(1).toLowerCase();

const repeatWord = (wordValue: string, paramValue: number) => wordValue.repeat(paramValue);

// catered for swedish - feel free to change 😊
const countVowels = (wordValue: string) => (wordValue.match(/[aeiouyåäö]/gi) || []).length;


// Check for correct types
const word: unknown = document.getElementById('word');
const wordValue: string = turnElementInputIntoString(word);
const operation: unknown = document.getElementById('operation');
const operationSelectElement: HTMLSelectElement = checkIfSelectElement(operation);
const param: unknown = document.getElementById('param');
const button: unknown = document.getElementById('transformButton');
const buttonElement: HTMLButtonElement = checkIfButtonElement(button);

const transformWord = (operationValue: string, wordValue: string, paramValue: number) => {
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

function turnElementInputIntoString(variable: unknown): string {
  if (variable instanceof HTMLInputElement) {
   return variable.value;
  };
  return '';
};
function turnElementSelectIntoString(variable: unknown): string {
  if (variable instanceof HTMLSelectElement) {
   return variable.value;
  };
  return '';
};
function turnElementInputIntoNumber(variable: unknown): number {
  if (variable instanceof HTMLInputElement) {
    return parseInt(variable.value);
  };
  return 0;
}
function checkIfString(variable: unknown): string {
  if (typeof variable === "string") {
    return variable;
  } else if(typeof variable === "number") {
    return variable.toString();
  }
  return '';
}
function checkIfDivElement(variable: unknown): HTMLDivElement{
  if (variable instanceof HTMLDivElement) {
    return variable;
  };
  throw new Error(`Variable is not a HTMLDivElement`);
};
function checkIfSelectElement(variable: unknown): HTMLSelectElement{
  if (variable instanceof HTMLSelectElement) {
    return variable;
  };
  throw new Error(`Variable is not a HTMLSelectElement`);
};
function checkIfButtonElement(variable: unknown): HTMLButtonElement{
  if (variable instanceof HTMLButtonElement) {
    return variable;
  };
  throw new Error(`Variable is not a HTMLButtonElement`);
};

const runTransformation = () => {
  const wordValue: string = turnElementInputIntoString(word);
  const operationValue: string = turnElementSelectIntoString(operation);
  const paramValue: number = turnElementInputIntoNumber(param);

  const result: unknown = transformWord(operationValue, wordValue, paramValue);
  const resultAsString: string = checkIfString(result);
  const resultContainer: unknown = document.getElementById('result');
  const resultDiv: HTMLDivElement = checkIfDivElement(resultContainer);
  resultDiv.textContent = `Result: ${resultAsString}`;
  resultDiv.classList.toggle('active', resultAsString !== '');
};

// Show/hide param input based on selected operation
operationSelectElement.addEventListener('change', function () {
  const paramContainer: unknown = document.getElementById('paramContainer');
  const paramDiv: HTMLDivElement = checkIfDivElement(paramContainer);
  paramDiv.classList.toggle('active', this.value === 'repeat');
});

// Event listener for transform button
buttonElement.addEventListener('click', runTransformation)
