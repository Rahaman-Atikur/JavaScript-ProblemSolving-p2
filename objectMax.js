/**
 * find the minimum price from a mobile phone list
 * -------------------------------------------------------------------------
 * 
 */


let mobiles = [
    { name: 'Samsung', price: 18000, color: 'black' },
    { name: 'Iphone', price: 20000, color: 'white' },
    { name: 'Google', price: 25000, color: 'purple' },
    { name: 'Vivo', price: 28000, color: 'pink' },
    { name: 'Xiuami', price: 29000, color: 'blue' },
    { name: 'Oppo', price: 31000, color: 'Navyblue' },
    { name: 'Nokia', price: 35000, color: 'red' },
]
function cheapFinder(mobiles) {
    let min = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price < min.price) {
            min = mobile;
        }
    }
    return min;
}

let result = cheapFinder(mobiles);
console.log(result.name);

