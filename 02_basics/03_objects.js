// Objects 
// object.create
// constructor se object bnega to singleton Hoga
// wrna literal hoga 

// object literal

const mySym = Symbol("key 1")

const Js_user ={
    name : "tushar",
    [mySym] : "mykey1",    // symbol ko hmesha square bracket me likhna pdega tbhi symbol hoga vo wrna string bn jega 
    age : 21,
    location : "Yamunanagar",
    email : "tushar@gmail.com",
    isLoggedin : false,
    logIndays :["monday", "tuesday"]
}

// console.log(Js_user["email"]);
// console.log( typeof Js_user[mySym]);

Js_user.email = "tushar@chatgpt.com"
// Object.freeze(Js_user)  // freeze statement btata h in future kisi bhi object me koi changes nhi hogi user kitni bhi koshish krle 
Js_user.email = "tushar@google.com"
// console.log(Js_user);


Js_user.greeting = function(){
    console.log("hello js user");
    
}

Js_user.greetingTwo = function(){
    console.log(`hello js user ${this.name} is here`);
    
}


console.log(Js_user.greeting());
console.log(Js_user.greetingTwo());



