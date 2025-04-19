
/**Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
------------------------------------------------------------------------------------
1. declare an array
2. pass array in a function
3. loop through each element
4. arr[0] , arr[i]<arr[i+1]
5. min = arr[i];
6. return min


*/
let friends = ['rahim', 'robin', 'rafi', 'ronokkhan', 'rashed'];
function shortNameFinder(friends) {
    let minLengthName =[];
    for (let i = 0; i < friends.length-1; i++) {
      
        if(friends[i].length<friends[i+1].length){
            minLengthName = friends[i];
        }
    }
    return minLengthName;
}
console.log(shortNameFinder(friends));


