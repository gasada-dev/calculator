const numberBtns = document.querySelectorAll('.number'),
    operationBtns = document.querySelectorAll('.operation'),
    resultBtn = document.getElementById('result'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear'),
    display = document.getElementById('display');

let memoryCurrentNumber = 0,
    memoryNewNumber = false,
    memoryPendingOperation = '';

for (let i = 0; i < numberBtns.length; i++) {
    let numberBtn = numberBtns[i];
    numberBtn.addEventListener('click', (e) => {
        numberPress(e.target.textContent);
    });
};

for (let i = 0; i < operationBtns.length; i++) {
    let operationBtn = operationBtns[i];
    operationBtn.addEventListener('click', (e) => {
        operation(e.target.textContent);
    });
};

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', (e) => {
        clear(e.target.id);
    });
};

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);

function numberPress(num) {

    if (memoryNewNumber) {

        display.value = num;
        memoryNewNumber = false;

    } else {

        if (display.value === '0') {
            display.value = num;

        } else {
            display.value += num;
        };
    };
};

function operation(oper) {

    let memoryOperationlocal = display.value;

    if (memoryNewNumber && memoryPendingOperation !== '=') {
        display.value = memoryCurrentNumber;

    } else {
        memoryNewNumber = true;

        if (memoryPendingOperation === '+') {
            memoryCurrentNumber += parseFloat(memoryOperationlocal);

        } else if (memoryPendingOperation === '-') {
            memoryCurrentNumber -= parseFloat(memoryOperationlocal);

        } else if (memoryPendingOperation === '/') {
            memoryCurrentNumber /= parseFloat(memoryOperationlocal);

        } else if (memoryPendingOperation === '*') {
            memoryCurrentNumber *= parseFloat(memoryOperationlocal);

        } else {
            memoryCurrentNumber = parseFloat(memoryOperationlocal);
        };

        display.value = memoryCurrentNumber;
        memoryPendingOperation = oper;
    };
};

function clear(id) {

    if (id === 'ce') {
        display.value = '0';
        memoryNewNumber = true;
        console.log(id);

    } else if (id === 'c') {
        display.value = '0';
        memoryNewNumber = true;
        memoryCurrentNumber = '0';
        memoryPendingOperation = '';
    };
};

function decimal() {
    let localDecimalMemory = display.value
    if (memoryNewNumber) {
        localDecimalMemory = '0.';
        memoryNewNumber = false;

    } else {

        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        };
    };

    display.value = localDecimalMemory;
};

