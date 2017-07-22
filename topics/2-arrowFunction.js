//Example 1 : 

//Before Ecmascript 6 format
function sum(a,b){
	return a+b;
}

console.log(sum(1,2))

//Output is:
//3

//Ecmascript 6  format
let sumWithArrow = (a,b) =>{ return a+b } ;

console.log(sumWithArrow(1,2))

//Output is:
//3

/***********************************************************************************************************************/

// Example 2 : 

//Before Ecmascript 6 format
function square(a){
	return a*a;
}

console.log(square(3))

//Output is:
//9

let squareWithArrow = a => a * a ;

console.log(squareWithArrow(3))

//Output is:
//9

/***********************************************************************************************************************/
//Example 3 : 

//Before Ecmascript 6 format
function multiply(a,b){
	return a*b;
}

console.log(multiply(3,4))

//Output is:
//12

let multiplyWithArrow = (a,b) => a * b ;

console.log(multiplyWithArrow(3,4))

//Output is:
//12



