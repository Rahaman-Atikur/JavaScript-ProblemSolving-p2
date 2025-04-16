/**
 * Find the maximum numbers
 */
let ageOfRakib = 23;
let ageOfSakib = 28;
let ageOfAkib = 18;
function maximumAgeCalculator(ageOfRakib,ageOfSakib,ageOfAkib){
    if(ageOfRakib>ageOfSakib && ageOfRakib>ageOfAkib){
        console.log("Rakib is the eldest brother");
    }
    else if(ageOfSakib>ageOfRakib && ageOfSakib>ageOfAkib){
        console.log("Sakib is the eldest brother");
    }
    else{
        console.log("Akib is the eldest brother");
    }
}
maximumAgeCalculator(ageOfRakib,ageOfSakib,ageOfAkib);


// using max function
const numbers1 = 14;
const numbers2 = 11;
const numbers3 = 10;
const numbers4 = 17;
const numbers5 = 19;
console.log(Math.max(numbers1,numbers2,numbers3,numbers4,numbers5));