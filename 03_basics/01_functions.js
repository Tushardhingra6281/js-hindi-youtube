// functions 

function myname(){
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
    
}

// myname()

// function Addtwonumber(number1 , number2){
//     console.log(number1+number2);
    
// }

function Addtwonumber(number1 , number2){
    // let raju = number1 + number2  (Method 1 )
    // return raju;
    
    return number1 + number2   //(method 2 )
}

const r3 = (Addtwonumber(3,4));
// console.log( "Result :" , r3);


function loginUserMessage(username = "tushar"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }

     return `${username} just logged in`

}
console.log(loginUserMessage())  // agr hum kuch pass hi nhi krege to undefned aayega likha 




