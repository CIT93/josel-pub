console.log ("hello from inside the main.js")

//let myVar;

const myVar = "Jose";
const myVarType = typeof (myVar);
console.log("myVarType " + myVarType); 
console.log('myVarType ${myVarType}'); 


if (myVarType === "number") {
    console.log(`will 11 this one run?`);
} else {
    console.log (`will 13 this one run`);
} 
function runNow () {
    if (myVarType === "number") {
        console.log(`will 11 this one run?`);
    } else {
        console.log (`will 13 this one run`);
    };
}

runNow ();
runNow ();