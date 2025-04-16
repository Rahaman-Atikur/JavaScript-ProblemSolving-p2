let woodForBed = 10;
let woodForChair = 20;
let woodForSofa = 32;
function totalWoodCost(woodForBed, woodForChair, woodForSofa) {
    let quantityOfBed = 5;
    let quantityOfChair = 5;
    let quantityOfSofa = 5;
    let totalForBedCost = quantityOfBed * woodForBed;
    let totalForChairCost = quantityOfChair * woodForChair;
    let totalForSofaCost = quantityOfSofa * woodForSofa;

    totalCost = totalForSofaCost + totalForBedCost + totalForChairCost;

    return totalCost;

}

console.log(totalWoodCost(woodForBed,woodForChair,woodForSofa));