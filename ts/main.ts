'use strict';

class Calculator {
    currentOperandText: any;
    currentOperand: any;
    operation: any;

    constructor(currentOperandElement: any) {
        this.currentOperandText = currentOperandElement;
        this.clearDisplay();
    }

    clearDisplay() {
        this.currentOperand = '';
        this.operation = undefined;
    }

    concatNumber(number: number) {
        this.currentOperand = this.currentOperand + number;
    }

    chooseOperation(operation: string) {
        if(this.currentOperand !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.currentOperand = this.currentOperand + this.operation;
    }

    calculate() {
        
        
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalButton = document.querySelector('[data-equal]');
const currentOperandElement = document.querySelector('[data-operand]');

const calculator: Calculator = new Calculator(currentOperandElement);

numberButtons.forEach(element => {
    element.addEventListener('click', () => {
        calculator.concatNumber(parseInt(element.innerHTML));
        calculator.updateDisplay();
    })
});

operationButtons.forEach(element => {
    element.addEventListener('click', () => {
        calculator.chooseOperation(element.innerHTML);
        calculator.updateDisplay();
    })
});


// allClearButton.addEventListener('click', button => {
//     calculator.clearDisplay();
//     calculator.updateDisplay();
// });
