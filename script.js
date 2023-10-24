const userInput = document.querySelector('.js-input');
const calculation = document.querySelector('.js-calculation');

let isFloat = false;
let isOperator = '';

let firstNumber = '';
let secondNumber = '';

let result = 0;

calculation.innerText = '0';



document.querySelector('.zero').addEventListener('click', () => {
    userInput.innerText += '0';

    if (!isOperator) {
        firstNumber += '0';
    } else {
        secondNumber += '0';
    };
});

document.querySelector('.one').addEventListener('click', () => {
    userInput.innerText += '1';

    if (!isOperator) {
        firstNumber += '1';
    } else {
        secondNumber += '1';
    };
});

document.querySelector('.two').addEventListener('click', () => {
    userInput.innerText += '2';

    if (!isOperator) {
        firstNumber += '2';
    } else {
        secondNumber += '2';
    };
});

document.querySelector('.three').addEventListener('click', () => {
    userInput.innerText += '3';
    
    if (!isOperator) {
        firstNumber += '3';
    } else {
        secondNumber += '3';
    };
});

document.querySelector('.four').addEventListener('click', () => {
    userInput.innerText += '4';
    
    if (!isOperator) {
        firstNumber += '4';
    } else {
        secondNumber += '4';
    };
});

document.querySelector('.five').addEventListener('click', () => {
    userInput.innerText += '5';
    
    if (!isOperator) {
        firstNumber += '5';
    } else {
        secondNumber += '5';
    };
});

document.querySelector('.six').addEventListener('click', () => {
    userInput.innerText += '6';
    
    if (!isOperator) {
        firstNumber += '6';
    } else {
        secondNumber += '6';
    };
});

document.querySelector('.seven').addEventListener('click', () => {
    userInput.innerText += '7';
    
    if (!isOperator) {
        firstNumber += '7';
    } else {
        secondNumber += '7';
    };
});

document.querySelector('.eight').addEventListener('click', () => {
    userInput.innerText += '8';
    
    if (!isOperator) {
        firstNumber += '8';
    } else {
        secondNumber += '8';
    };
});

document.querySelector('.nine').addEventListener('click', () => {
    userInput.innerText += '9';

    if (!isOperator) {
        firstNumber += '9';
    } else {
        secondNumber += '9';
    };
});

document.querySelector('.point').addEventListener('click', () => {
    if (!isFloat) {
        userInput.innerText += '.';

        if (!isOperator) {
            firstNumber += '.';
        } else {
            secondNumber += '.';
        };
        
        isFloat = true;
    };
});

document.querySelector('.divide').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
        return;
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '÷';
    isOperator = '÷';
    isFloat = false;
});

document.querySelector('.multiply').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '×';
    isOperator = '×';
    isFloat = false;
});

document.querySelector('.subtract').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '-';
    isOperator = '-';
    isFloat = false;
});

document.querySelector('.add').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '+';
    isOperator = '+';
    isFloat = false;
});

document.querySelector('.remainder').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
    } 
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '%';
    isOperator = '%';
    isFloat = false;
});

document.querySelector('.equal').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
    };
    calculate();
});

document.querySelector('.clear').addEventListener('click', () => {
    userInput.innerText = '';
    calculation.innerText = '0';
    firstNumber = '';
    secondNumber = '';
    isOperator = false;
    isFloat = false;
});

document.querySelector('.positiveNegative').addEventListener('click', () => {
    if (!isOperator) {
        if (firstNumber > 0) {
            firstNumber = `-${firstNumber}`;
            userInput.innerText = `${firstNumber}`;
        } else {
            firstNumber = firstNumber.slice(1);
            userInput.innerText = `${firstNumber}`;
        };
    } else {
        if (secondNumber > 0) {
            secondNumber = `-${secondNumber}`;
            userInput.innerText = `${firstNumber}${isOperator}${secondNumber}`;
        } else {
            secondNumber = secondNumber.slice(1);
            userInput.innerText = `${firstNumber}${isOperator}${secondNumber}`;
        };
    };
});

document.querySelector('.delete').addEventListener('click', () => {
    if (userInput.innerText.slice(-1) === isOperator) {
        isOperator = false;
        userInput.innerText = userInput.innerText.slice(0, -1);
    } else {
        userInput.innerText = userInput.innerText.slice(0, -1);
        if (!isOperator) {
            firstNumber = firstNumber.slice(0, -1);
        } else {
            secondNumber = secondNumber.slice(0, -1);
        };
    };
});

function calculate() {
    switch (isOperator) {
        case '+':
            result = +firstNumber + +secondNumber;
            calculation.innerText = result;
            userInput.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '-':
            result = +firstNumber - +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '×':
            result = +firstNumber * +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '÷':
            if (secondNumber === '0') {
                calculation.innerText = "Error: can't divide by 0.";
                return;
            };
            result = +firstNumber / +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '%':
            result = +firstNumber % +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
    };
}