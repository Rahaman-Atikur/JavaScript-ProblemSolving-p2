
/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];
let min = heights2[0];
function lowestFinder(heights2) {
    
    for (let height of heights2) {
        if (height < min) {
            min = height;
        }
    }
    return min;
}
let res = lowestFinder(heights2);
console.log(res);

