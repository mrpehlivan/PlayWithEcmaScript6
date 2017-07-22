//Describe : Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual 
//			function parameters.

//Example 1 : 

//Before Ecmascript 6 format
function sum(a,b){
	return a+b;
}

let nums = [3,4]

console.log(sum(nums[0],nums[1]))

//Output is:
//7

//Ecmascript 6  format

console.log(sum(...nums))

//Output is:
//7

/***********************************************************************************************************************/

//Example 2 : 

//Before Ecmascript 6 format
let movies = ['dunkirk','inception','memento','interstellar'];
let author = ['christopher','nolan',movies[0],movies[1],movies[2],movies[3]];

console.log(author)

//Output is:
//["christopher", "nolan", "dunkirk", "inception", "memento", "interstellar"]

//Ecmascript 6  format
author = ['christopher','nolan',...movies];

console.log(author)

//Output is:
//["christopher", "nolan", "dunkirk", "inception", "memento", "interstellar"]
