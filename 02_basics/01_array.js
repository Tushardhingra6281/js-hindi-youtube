// array

const myArray = [1,2,3,4,5]

// console.log(myArray[0]);

// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

myArray.unshift(7)  // sbse aage value dalegi 

myArray.shift(7)  // remove kr dega sbse aage wali values ko

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));

// const newArr = myArray.join();
// console.log( newArr);

// console.log(myArray);

// slice , splice (Very imp topic for interview dhyan se pdo kyuki interview me pucha jata h)

console.log("A " , myArray);

const myn1 = myArray.slice(1,3);  // splice me jo hmne input di h usme last wali value include nhi hoti or original array me bhi change nhi hota 
console.log(myn1);
console.log(myArray);


console.log("B" , myArray);


const myn2 = myArray.splice(1,3);  // splice me saari value include hoti h lekin original array me se vo value nikl jaati h 
console.log("c : original array" ,myArray);
console.log(myn2);
