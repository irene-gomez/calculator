'use strict';

class Calculator {
    currentOperandText: any;
    currentOperand: any;
    previousOperand: any;
    operation: any;

    constructor(currentOperandElement: any) {
        this.currentOperandText = currentOperandElement;
        this.clearDisplay();
    }

    clearDisplay() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    concatNumber(number: number) {
        this.currentOperand = this.currentOperand + number;
    }

    chooseOperation(operation: string) {
        if(this.previousOperand !== '') {
            this.calculateOperation();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculateOperation() {
        let result: number;
        const previous: number = parseInt(this.previousOperand);
        const current: number = parseInt(this.currentOperand);

        switch (this.operation) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '×':
                result = previous * current;
                break;
            case '÷':
                result = previous / current;
                break;
            default:
                return;
        }
        
        this.currentOperand = result;
        this.previousOperand = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;

        if(this.operation !== undefined) {
            this.currentOperandText.innerText = `${this.previousOperand} ${this.operation} ${this.currentOperand}`;
        }
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

equalButton.addEventListener('click', () => {
    calculator.calculateOperation();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
    calculator.clearDisplay();
    calculator.updateDisplay();
});
