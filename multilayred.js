

let price;
let quantity;
function discountAmount(quantity, price) {
    let total = price * quantity;
    if (quantity <= 10) {
        return total;
    }
    else  if(quantity>10 && quantity<=20){
        return total + (price * quantity)*(10/100);
    }
    else if(quantity>20){
        return total + (price * quantity)*(10/100) + (price * quantity)*(20/100);
    }
    
}