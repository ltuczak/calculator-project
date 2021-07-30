class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {
        if (this.operator == 'add') {
            return 'adding';
        } else if (this.operator == 'multiply') {
            return 'multiplying';
        } else if (this.operator == 'divide') {
            return 'dividing';
        } else if (this.operator == 'subtract') {
            return 'subtracting';
        }
    }
    // performa a calculation based on the currently selected operation
    operate() {
        if (this.operator == 'multiply') {
            return this.multiply();
        } else if (this.operator == 'add') {
            return this.add();
        } else if (this.operator == 'subtract') {
            return this.subtract();
        } else if (this.operator == 'divide') {
            return this.divide();
        };
    }
                        
    attemptedDivideByZero = false;

    // perform addition operation
    add() {
        return parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }

    // perform subtraction operation
    subtract() {
        return parseInt(this.firstNumber) - parseInt(this.secondNumber);
    }

    // perform multiplication operation
    multiply() {
        return parseInt(this.firstNumber) * parseInt(this.secondNumber);
    }

    // perform divide operation
    divide() {
        if (this.secondNumber !== 0) {
            return parseInt(this.firstNumber) / parseInt(this.secondNumber);
        } else {
            attemptedDivideByZero = true;
            console.log("Error! Cannot divide by zero.");
        };
    }    
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
