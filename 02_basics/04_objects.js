// objects Part 2 

// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "2221112"
tinderUser.name = "Reacher"
tinderUser.LoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "reacher@gmail.com",
    fullname  : {
        userfullname : {
            firstname : "reacher",
            lastname : "singh",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname.);


const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}


// const obj3 = Object.assign(obj1 , obj2)  // Object.assign ka kaam h 2 ya 2 se jada objects ko ek saath likhta h 

const obj3 = {...obj1 , ...obj2}  // ye wala method sbse best 2 , 3 ya usse jada array or object ko ek saath likhne ke liye 
console.log(obj3);


console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('LoggedIn'));  // check krne ke liye h iske pass property h ye wali ya nhi 

