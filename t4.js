/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
--------------------------------------------------------------------------------------
1.declare an array that takes the number of electronics
2.pass the function 
3. price * amount = particular price 
4. all particular price total 
5. return it 
 */

let numbersOfElectronics =[2,2,2];
let price = [35000,15000,20000];
let total =0 ;
function calculateElectronicsBudget(numbersOfElectronics,price){
    for(let i=0;i<price.length;i++){
       
         console.log( price[i]*numbersOfElectronics[j]);
        
    }
    return total;
}
console.log(calculateElectronicsBudget(numbersOfElectronics,price));
