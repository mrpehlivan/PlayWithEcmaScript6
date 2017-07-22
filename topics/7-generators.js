//Describe : Support for generators, a special case of Iterators containing a generator function, where the control flow can be paused 
//			 and resumed, in order to produce sequence of values (either finite or infinite).

//Example 1

function* moviesGenerator(){
	yield 'dunkirk';
	yield 'interstellar';
	console.log('this line is after interstellar');
	yield 'inception';
}

let movies = moviesGenerator();
console.log(movies.next()) 
console.log(movies.next())
console.log(movies.next())
console.log(movies.next())

//Output is : 

// Object {value: "dunkirk", done: false}
// Object {value: "interstellar", done: false}
// this line is after interstellar
// Object {value: "inception", done: false}
// Object {value: undefined, done: true}         //This value is undefined cause of we have just 3 yield ! 

/***********************************************************************************************************************/

//Example 2 

function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i) 
}

//Output is : 
//0,2,4,6,8
