function add(num1, num2) {
    return num1 + num2;
}
function subs(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide a number';
    }
    else {
        return num1 - num2;
    }

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
calculator('', '', 'subs');



let firstName = 'Gracie';
let lastName = 'Mike';
function nameCreator(firstName, lastName) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        return 'Please do not write any numbers';
    }
    else {
        let fullName = firstName + lastName;
        console.log(fullName);
    }

}
console.log(nameCreator(firstName, lastName));


let products = [
    { name: 'Soap', price: 230 },
    { name: 'Pen', price: 130 },
    { name: 'Pencil', price: 330 }
]
function getPrice(products) {
    // for(const product of products){
        console.log(products.price);
    // }
    
}
getPrice(products);





