let mobile = [
    { name: 'Samsung', price: 18000, color: 'black' },
    { name: 'Iphone', price: 20000, color: 'white' },
    { name: 'Google', price: 25000, color: 'purple' },
    { name: 'Vivo', price: 28000, color: 'pink' },
    { name: 'Xiuami', price: 29000, color: 'blue' },
    { name: 'Oppo', price: 31000, color: 'Navyblue' },
    { name: 'Nokia', price: 35000, color: 'red' }
]
function cheapFinder(mobile) {
    let min = mobile[0];
    let cheap;
    for (const myShopping of mobile) {
        if (mobile.price < min.price) {
             min = mobile;
        }
    }
    return cheap;
}

console.log(cheapFinder(mobile));

