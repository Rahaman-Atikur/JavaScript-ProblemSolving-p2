/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
--------------------------------------------------------------------------------------
1.no of mobile and their price and sum all of them
 */

let mobilePrice = 20000;
let tabletPrice = 15000;
let laptopPrice = 35000;
function calculateElectronicsBudget(noOfMobile, noOfTablet, noOfLaptop) {
    let totalBillForMobile = noOfMobile * 20000;
    let totalBillForTablet = noOfTablet * 15000;
    let totalBillForLaptop = noOfLaptop * 35000;
    return total = totalBillForMobile + totalBillForTablet + totalBillForLaptop;
}
let budget = calculateElectronicsBudget(2,2,2);
console.log(budget);