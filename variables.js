var name = "pokemon";
//function scope(global)
//value cann be updated
//redeclared
if(true)
{
var name ="pikachu";
}
console.log(name);
VM142:5 pikachu

var age=1;
var age=2;
console.log(age);
VM194:3 2
undefined

var gender ="male";
gender ="femalae";
console.log(gender);
VM370:3 femalae
undefined







let name = "pokemon";
//block scope
//redeclare (block)
//update possible
if(true)
{ name ="pikachu";
}
console.log(name);
VM142:5 pikachu
undefined

let name = "pokemon";
name="pikachu";
"pikachu"

let name = "pokemon";
if(true)
{
let name ="pikachu";
}
console.log(name);
VM163:6 pokemon
undefined

let name = "pokemon";
let name ="pikachu";
console.log(name);
VM374:2 Uncaught SyntaxError: Identifier 'name' has already been declared








const name = "pokemon";
//no redeclare
//no update
//constant cannot change once declared(static)
if(true){
const name="pikachu";
}
console.log(name);
VM606:1 Uncaught SyntaxError: Identifier 'name' has already been declared

const name = "pokemon";
name="pikachu";
VM680:1 Uncaught SyntaxError: Identifier 'name' has already been declared


