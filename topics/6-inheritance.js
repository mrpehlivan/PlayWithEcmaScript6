//Describe : More intuitive, OOP-style and boilerplate-free classes.

//Example  : 

class Person{
	constructor(name,surname,age){
		this.name= name;
		this.surname=surname;
		this.age = age;
	}

	displayAge(){
		console.log(this.age);
	}
}

class Programmer extends Person{
	constructor(name,surname,age,language){
		super(name,surname,age);
		this.language = language;
	}

	displayLanguage(){
		console.log(this.language);
	}
}

let p = new Programmer('Arif','Pehlivan',27,'javascript');
console.log(p.displayLanguage());
console.log(p.displayAge());

//javascript
//27
/***********************************************************************************************************************/

