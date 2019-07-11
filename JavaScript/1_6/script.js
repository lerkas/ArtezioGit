'use strict';

function buttonClick() {
    let radio = document.getElementsByName('operation');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked && radio[i].value == document.getElementById('simpleSum').value) {
            simpleSum();
        }
        if (radio[i].checked && radio[i].value == document.getElementById('sum').value) {
            sum();
        }
        if (radio[i].checked && radio[i].value == document.getElementById('product').value) {
            product();
        }
        if (radio[i].checked && radio[i].value == document.getElementById('primeNumber').value) {
            primeNumber();
        }
    }
}

function simpleSum() {
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    if (x1.length == 0 || x2.length == 0) {
        alert('Поля X1 и X2 не могут быть пусты.\nВведите числа.');
    } else {
        let result = 'X1 + X2 = ' + (parseInt(x1) + parseInt(x2));
        document.getElementById('result').innerHTML = result;
    }
}

function sum() {
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    if (x1.length == 0 || x2.length == 0) {
        alert('Поля X1 и X2 не могут быть пусты.\nВведите числа.');
    } else {
        let result = 0;
        let a = parseInt(x1);
        let b = parseInt(x2);
        for (a; a <= b; a++) {
            result += a;
        }
        document.getElementById('result').innerHTML = 'Сумма всех чисел от X1 до X2 = ' + result;
    }
}

function product() {
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    if (x1.length == 0 || x2.length == 0) {
        alert('Поля X1 и X2 не могут быть пусты.\nВведите числа.');
    } else {
        let result = 1;
        let a = parseInt(x1);
        let b = parseInt(x2);
        for (a; a <= b; a++) {
            result *= a;
        }
        document.getElementById('result').innerHTML = 'Произведение всех чисел от X1 до X2 = ' + result;
    }
}

function primeNumber() {
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    if (x1.length == 0 || x2.length == 0) {
        alert('Поля X1 и X2 не могут быть пусты.\nВведите числа.');
    } else {
        let result = [];
        let a = parseInt(x1);
        let b = parseInt(x2);

        if (a > b) {
            let tmp = a;
            a = b;
            b = tmp;
        }

        nextPrime:
            for (a; a <= b; a++) {
                if (a <= 0 || a == 1) {
                    continue;
                }
                for (let j = 2; j < a; j++) {
                    if (a % j == 0) {
                        continue nextPrime;
                    }
                }
                result.push(a);
            }
        document.getElementById('result').innerHTML = 'Все простые числа от X1 до X2: ' + result.join();
    }
}

function toClear() {
    document.getElementById('x1').value = null;
    document.getElementById('x2').value = null;
    document.getElementById('result').innerHTML = null;
}