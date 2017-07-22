//Describe : More intuitive, OOP-style and boilerplate-free classes.

//Example  : 

class Person{
	constructor(name,surname,age,weight){
		this.name= name;
		this.surname=surname;
		this.age = age;
		this.weight = weight;
	}

	displayWeight(){
		console.log(this.weight);
	}

	displayAge(){
		console.log(this.age);
	}
}


let p = new Person('arif','pehlivan',27,72);
console.log(p.displayAge());
console.log(p.displayWeight());
/***********************************************************************************************************************/

