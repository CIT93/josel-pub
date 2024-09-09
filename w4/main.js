const cfpData = [];

function determineHouseSizePts(size) {
  let houseSize = 0;
  if (size === "large") {
    houseSize =  10;
  } else if (size === "medium") {
    houseSize = 7;
  } else if (size === "small") {
    houseSize =  4;
  } else if (size === "apt") {
    houseSize = 2;

      }
      return houseSize
 }
 
   function determineHouseHoldPts(numberInHousehold) {
   let houseHoldPoints = 0; 
 if (numberInHousehold === 1) {
  houseHoldPoints = 14;
 } else if (numberInHousehold === 2) {
  houseHoldPoints = 12;
 } else if (numberInHousehold === 3) {
  houseHoldPoints = 10;
 } else if (numberInHousehold === 4) {
  houseHoldPoints = 8;
 } else if (numberInHousehold === 5) {
  houseHoldPoints = 6;
 } else if (numberInHousehold === 6) {
  houseHoldPoints = 4;
 } else if (numberInHousehold > 6) {
  houseHoldPoints = 2;
}

return houseHoldPoints
  }

 // let cardonFootprintPoints = 0;

 function start (houseHoldMembers, houseSize) {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers); 
  const houseSizePTS = determineHouseSizePts(houseSize); 
  const total = houseHoldPts + houseSizePTS; 
  cfpData.push(houseHoldMembers, houseSize, houseHoldPts, houseSizePTS, total);
  
 }

function displayOutput () {
  for(arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output"); 
    const newp = document.createElement("p"); 
    newp.textContent = `If your household consits of ${arr[0]} members, the score will be ${arr[2]}. 
    If your housesize is ${arr[1]} you will score ${arr[1]} points. Adding the total Cardon Footprint to ${arr[4]}`; 
    output.appendChild(newp)

  }
}

 start (5, "apt"); 
 start (4, "large");
 start (3, "meduim");
 start (2, "small"); 
 start (1, "apt"); 
 start (6, "large"); 
 start (7, "meduim");
 start (8, "small");

















displayOutput() 