function add(num1, num2) {
    return num1 + num2;
}
function subs(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
let operation;
function calculator(num1, num2, operation) {
    if (operation === 'add') {
        console.log(add(num1, num2));

    }
    else if (operation === 'subs') {
        console.log(subs(num1, num2));

    }
    else if (operation === 'mul') {
        console.log(mul(num1, num2));

    }
    else if (operation === 'div') {
        console.log(div(num1, num2));

    }
}
calculator(2, 3, 'subs');




