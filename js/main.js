'use strict';
class Calculator {
    constructor(currentOperandElement) {
        this.currentOperand = currentOperandElement;
        this.clearDisplay();
    }
    clearDisplay() {
        this.currentOperand.innerHTML = '';
    }
    addNumber(number) {
        this.currentOperand.innerHTML = this.currentOperand.innerHTML + number;
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clea]');
const equalButton = document.querySelector('[data-equal]');
const currentOperandElement = document.querySelector('[data-operand]');
const calculator = new Calculator(currentOperandElement);
numberButtons.forEach(element => {
    element.addEventListener('click', () => {
        calculator.addNumber(parseInt(element.innerHTML));
    });
});
allClearButton.addEventListener('click', () => {
    calculator.clearDisplay();
});
