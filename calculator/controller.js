// setup variables and get a calculator instance
function CreateCalculator() {
    let firstNumber = document.getElementById('fn');
    firstNumber = firstNumber.textContent;
    let secondNumber = document.getElementById('sn');
    secondNumber = secondNumber.textContent;
}

// perform a calculation when the operator button is clicked
function calculate() {
    value = operator.addEventListener('click', this.operate())
    return value;
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    let minor = document.getElemetnById('minor');
    let result = minor.appendChild('p');
    result.textContent = `The result of ${getAction()} ${firstNumber} and ${secondNumber} is ${value}`;

}

// should clear input text values and focus the first number input
function clearValues(firstNumber, secondNumber) {
    firstNumber.textContent = '';
    secondNumber.textContent = '';
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    operator = document.getElementsByName('radio');

    for (let i = 0; i < operator.length; i++) {
        if (operator[i].checked) {
            operator = opertaor[i].value;
        };
    };

    return operator;
}

let equals = document.getElementById('equals');
console.log(equals);
console.log(document.getElementById('equals'))
equals.addEventListener('click', CreateCalculator());

console.log(firstNumber, secondNumber, operator)

let calc = new Calculator(1, 1, 'add');

console.log(calc);

updateResultText(calculate());

document.getElementById('clear').onclick() = clearValues();