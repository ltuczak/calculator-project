// setup variables and get a calculator instance
function CreateCalculator() {
    let firstNumber = document.getElementById('fntext');
    firstNumber = firstNumber.value;
    let secondNumber = document.getElementById('sntext');
    secondNumber = secondNumber.value;
    let operator = getOperator();
    let calc = new Calculator(firstNumber, secondNumber, operator);

    return calc;
}

// perform a calculation when the operator button is clicked
function calculate() {
    let calc = CreateCalculator();
    let value = calc.operate();
    let array = [value, calc];
    return array;
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
document.getElementById('equals').onclick = function updateResultText() {
    let array = calculate();
    let value = array[0];
    let calc = array[1];
    let major = document.getElementById('major');
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    major.appendChild(container);
    let result = document.createElement('p');
    result.setAttribute('id', 'result');
    result.innerText = `The result of ${calc.getAction()} ${calc.firstNumber} and ${calc.secondNumber} is ${value}`;
    container.appendChild(result);
    container.style.cssText = 'width: 100vw, display: flex; flex-direction: column; justify-content: center;';
    result.style.cssText = 'text-align: center;'
}

// should clear input text values and focus the first number input
document.getElementById('clear').onclick = function clearValues() {
    let firstNumber = document.getElementById('fntext');
    firstNumber.value = '';
    let secondNumber = document.getElementById('sntext');
    secondNumber.value = '';
    document.getElementById('result').remove();
    document.getElementById('container').remove();
    document.getElementById('add').checked = false;
    document.getElementById('subtract').checked = false;
    document.getElementById('multiply').checked = false;
    document.getElementById('divide').checked = false;
    firstNumber.focus();
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    let operator;

    if (document.getElementById('add').checked) {
        operator = 'add';
    } else if (document.getElementById('subtract').checked) {
        operator = 'subtract';
    } else if (document.getElementById('multiply').checked) {
        operator = 'multiply';
    } else if (document.getElementById('divide').checked) {
        operator = 'divide';
    };

    return operator;
}