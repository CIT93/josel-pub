// function determineHouseHoldPts(numberInHousehold) {
  // console.log("Inside the funtion");
// } if (numberInHousehold === 1) {
  // cardonFootprintPoints = cardonFootprintPoints + 14;
// } else if (numberInHousehold === 2) {
  // cardonFootprintPoints = cardonFootprintPoints + 12;
// } else if (numberInHousehold === 3) {
  // cardonFootprintPoints = cardonFootprintPoints + 10;
// } else if (numberInHousehold === 4) {
  // cardonFootprintPoints = cardonFootprintPoints + 8;
// } else if (numberInHousehold === 5) {
  // cardonFootprintPoints = cardonFootprintPoints + 6;
// } else if (numberInHousehold === 6) {
  // cardonFootprintPoints = cardonFootprintPoints + 4;
// } else if (numberInHousehold > 6) {
  // cardonFootprintPoints = cardonFootprintPoints + 2;

  // console.log('Based on the number of members in the household of ${numberInHousehold} the points would be ${cardonFootprintPoints}.'); 
// }

// let cardonFootprintPoints = 0;
// const numberInHousehold = 3;

// global scope

// determineHouseHoldPts(3)
// determineHouseHoldPts (4)


function determineHouseSizePts(houseSize) {
  console.log("Inside the function");
}
if (houseSize === "large") {
  cardonFootprintPoints = cardonFootprintPoints + 10;
} else if (houseSize === "medium") {
  cardonFootprintPoints = cardonFootprintPoints + 7;
} else if (houseSize === "small") {
  cardonFootprintPoints = cardonFootprintPoints + 4;
} else if (houseSize === apartment) {
  cardonFootprintPoints = cardonFootprintPoints + 2;
    
  console.log('Based on the size of home ${houseSize} the points would be ${cardonFootprintPoints}.');
}


determineHouseSizePts (large)
determineHouseSizePts (apartment)