let price;

function discountedPrice(quantity,price) {
    if (quantity <= 100) {
        return price * quantity;
        
    }
    else if(quantity>100 && quantity<=200){
        return (price*quantity)*(10/100);
    }
    else if(quantity>200){
        return (price*quantity)*(30/100);
    }
}

console.log(discountedPrice(154,5));