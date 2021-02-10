let numberBtns = document.querySelectorAll('.number'),
    operationBtns = document.querySelectorAll('.operation'),
    resultBtn = document.getElementById('result'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear')


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
    console.log(num);
};

function operation(symbol) {
    console.log(symbol);
};

function clear(id) {
    console.log(id);
};

function decimal() {
    console.log('dec');
};

function result() {
    console.log('result');
};