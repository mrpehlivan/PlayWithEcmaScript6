//Description : Template Literals were originally named "Template Strings" in the drafts of the ECMAScript 6 language specification

//Example 1: String 

//Before Ecmascript 6 format

let name = 'Arif';
let surname = 'Pehlivan';

console.log('My name is  '+name+' and surname is  '+surname);

//Output is:
//My name is Arif and surname is  Pehlivan

//Ecmascript 6  format
console.log(`My name is  ${name} and surname is  ${surname}`);

//Output is:
//My name is Arif and surname is  Pehlivan

/***********************************************************************************************************************/


//Example 2: math operations

//Before Ecmascript 6 format

let a = 3; 
let b = 3;

console.log(' sum is : ',a+b);

//Output is:
//sum is 6

//Ecmascript 6  format
console.log(`sum is  ${a+b} `);

//Output is:
//sum is 6

/***********************************************************************************************************************/

//Example 3:  New line 

//Before Ecmascript 6 format
// You have to put \n


console.log(' Hi there , My name is Arif Pehlivan. \n I live at İstanbul / Turkey.');

//Output is:
//Hi there , My name is Arif Pehlivan. 
//I live at İstanbul / Turkey.

//Ecmascript 6  format
// enter is enough for the new line 

console.log(`Hi there , My name is Arif Pehlivan.
 I live at İstanbul / Turkey.`);

//Output is:
//Hi there , My name is Arif Pehlivan. 
//I live at İstanbul / Turkey.
