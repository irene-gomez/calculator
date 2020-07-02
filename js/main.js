'use strict';
class Calculator {
    constructor(currentOperandElement) {
        this.currentOperandText = currentOperandElement;
        this.clearDisplay();
    }
    clearDisplay() {
        this.currentOperand = '';
        this.operation = undefined;
    }
    concatNumber(number) {
        this.currentOperand = this.currentOperand + number;
    }
    chooseOperation(operation) {
        if (this.currentOperand !== '') {
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
const calculator = new Calculator(currentOperandElement);
numberButtons.forEach(element => {
    element.addEventListener('click', () => {
        calculator.concatNumber(parseInt(element.innerHTML));
        calculator.updateDisplay();
    });
});
operationButtons.forEach(element => {
    element.addEventListener('click', () => {
        calculator.chooseOperation(element.innerHTML);
        calculator.updateDisplay();
    });
});
