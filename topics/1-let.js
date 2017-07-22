//Description :  let comes with ecmascript6 and it is new  keyword for variable scoping

//Example 1 : 

//Global Scoping
let movie = 'Dunkirk';

//Functional scoping
function watch(){
	let movie = 'Inception';
	return movie;
}

console.log(movie)
console.log(watch())

//Output is:
//Dunkirk
//Inception

//All variable working on their scope

/***********************************************************************************************************************/

// Example 2 : 

function watch(){
	let movie = 'Inception';
	return movie;
}

console.log(watch())
console.log(movie)


//Output is:
//ERROR 

//Because the movie variable it is not created globally , just created blocked in function

/***********************************************************************************************************************/
//Example 3 : 

let movie = 'Dunkirk';

function watch(){
	let movie = 'Inception';
	return movie;
}

console.log(movie)
console.log(watch())
console.log(movie)

//Output is:
//Dunkirk
//Inception
//Dunkirk
//All variable working on their scope

/***********************************************************************************************************************/
//Example 4 : 


function watch(){
	let isMovie = true;
	let movie = 'Inception';
	console.log('Before if the movie is : ',movie)
	if(isMovie){
		let movie = 'Dunkirk';
		console.log('Inside if the movie is : ',movie);
	}

	console.log('After if the movie is :',movie)
}

console.log(watch())





