/**
 * Find the maximum number in a given array
 * --------------------------------------------------
 */
let arr = [10, 20, 30, 50];
let maxNumber;
function maxFinder(arr) {
    let helper = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < helper) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}
let result = maxFinder(arr);
console.log(result);