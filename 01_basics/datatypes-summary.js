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






// +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) (Jo bhi varible declaree krte h uska copy milta h )  , Heap (Non - Primitive) (ismse reference milta h jo bhi change krege original value me bhi change hoga )

let myChannel = "tushar.com"
let anotherChannel = myChannel
anotherChannel = "chai or code"
console.log(anotherChannel);
console.log(myChannel);

let userOne = {
    email : "user@gmail.com".
    gpay = "user@ybl"
}

let userTwo = userOne


userTwo.email = "tushar.com"
console.log(userOne.email);
console.log(userTwo.email);


