/**
 * find the total cost of a shopping .
 * -------------------------------------------------------------------------
 * 1.create a function
 * 2.total price of a particular product 
 * 3.then sum all .
 */
let products = [
    { name: 'Shampoo', price: 160, quantity: 2 },
    { name: 'Cream', price: 150, quantity: 3 },
    { name: 'Gel', price: 260, quantity: 5 },
    { name: 'HandWash', price: 360, quantity: 7 },
    { name: 'HandCream', price: 560, quantity: 8 },
    { name: 'conditioner', price: 160, quantity: 2 },
]
let total = 0;
function totalCostFinder(products) {
    for (let product of products) {
        let particularProductCost = product.price *product.quantity;
        total = total + particularProductCost;
    }
    return total;

}
let result = totalCostFinder(products);
console.log('Total Cost of your Shopping:',result);