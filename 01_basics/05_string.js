const name = "tushar"
const repoCount = 5

// console.log(name +  repoCount  + " Value " );

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const Newgame = new String('contra')

// console.log(Newgame[0]);  // 0 position pe konsa character h 
// console.log(Newgame.__proto__);

// console.log(Newgame.length); // length kya h word ki 

// console.log(Newgame.toUpperCase());  // saara word upper case me convert kr dega 

// // index no se hmm check kr skte h konsa character h uss position pe
// console.log(Newgame.charAt(2));


// character daalke check kr skte h konsi postion pe h vo character 
console.log(Newgame.indexOf('o'));

const newString = Newgame.substring(0 , 2)  // isme last wali value include nhi boti h 
console.log(newString);

const anotherString = Newgame.slice(-6 ,3)  // slice ke andar hi negative value use kr skte h hum or isme fir ! ans vo piche se dega 
console.log(anotherString);

const NewstringOne = "    tushar    "
console.log(NewstringOne);
console.log(NewstringOne.trim());  // aage or piche ka faltu ka space hta dega or direct ans dega 


// const game = new String('nody')

// // const New = game.charAt(0);
// console.log(game.charAt(0));

 
 



