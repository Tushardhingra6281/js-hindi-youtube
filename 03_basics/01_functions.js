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
// console.log(loginUserMessage())  // agr hum kuch pass hi nhi krege to undefned aayega likha 


function CalculateCartPrice(val1 , val2 ,...num1){   // ... isko rest operator bhi bola jata h or spread operator bhi 
    return num1;
}

// console.log(CalculateCartPrice(200,300,400,600,700));  // 200 or 300 val1 or val2 me chli gyi h 


const user = {
    name : "tushar",
    price : 200
}


function handleObject(anyobject){
    console.log(`USername is ${anyobject.name} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({                    //dono method use kr skte h hmari marzi h hmne kya use krna h  
    name : "mistri",
    price : 420
});


const myNewArray =[200,400,600,800]

function returnSecondvalue(getarray){
    return getarray[1]
}

console.log(returnSecondvalue(myNewArray));



