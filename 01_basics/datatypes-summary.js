// # Primitive

// 7 types : string , Number , Boolean , Null , undefined , Symbol(value ko unique banane ke liye use hoti h) , BigInt

const score = 100;
const scoreValue = 100.3;

const Isloggedin = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const Anotherid = Symbol('123')

console.log(id === Anotherid);


const bigNUmber = 843564564575n;
console.log(typeof bigNUmber);


// Reference (Non primitive)

// Array , Objects , Functions 


const heroes = ["ironman" , "hulk" ,"captain america"];
let myObj = {
    name : "tushar",
    age : 21
}

const myfunc = function(){
    console.log("hello world");
    
}