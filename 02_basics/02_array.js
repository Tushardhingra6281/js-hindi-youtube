// Array 2

const marvel_heroes = ["thor" ,"ironman" ,"hulk"]
const dc_heroes = ["superman" ,"Batman" ,"spiderman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)  // ek saath 2 array ko combine krna h to concat ka use krna pdega 
// console.log(all_heroes);

const all_new_heroes = [...dc_heroes , ...marvel_heroes] // ye bhi combine krta h 2 ya 2 se jada array ko

// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[8,9]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("tushar"))  // ye btata h bracket ke andr wali cheej array h ya nhi 

console.log(Array.from("tushar"));  // string , number kisi ko bhi array bna dega ye 

let t1 = 100
let t2 = 200
let t3 = 300

console.log(Array.of(t1,t2,t3));



