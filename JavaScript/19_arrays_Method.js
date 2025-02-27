let num=[1,3,5,7,9];
//To String
let b=num.toString();
console.log(b);
console.log(typeof(b));

//join(-)
console.log(num.join("-"));

//pop : Remove last element from the array

num.pop();
console.log(num);
console.log(num.length);


//Push : Add element
num.push(11);
console.log(num);
console.log(num.length);


//Shift : Removes First element and returns it
let r=num.shift();
console.log(r,"and",num);
console.log(num.length);

//unshift : Add first position  element and return it 
let a=num.unshift(88);
console.log(a,"and",num);
console.log(num.length);

//Delete : Delete element from array   and // SIZE is NOT change Of Array
let c=[1,2,3,4,5,6]
delete c[5];
console.log(c);
console.log(c.length);


//concat : Join the Given Array

let a1=[1,3,5,7,9];
let a2=[11,22,33,44,55];
let a3=[88,99,77,66,445];
let d=a1.concat(a2,a3);

console.log(d);

// sort the array on the ALPHABETICAL order
console.log(a3);
a3.sort();
console.log(a3);

//splice : can be used to  add new item to an array
const number=[1,2,3,4,5,6,7,8];
console.log(number);
number.splice(3,3,234,567,897);
console.log(number);

//Slice out in from an array to create a new array

let nume=[1,2,3,45.5,5,7,8,4];
console.log(nume.slice(2));  
console.log(nume.slice(2,5));
//reverse
console.log(a1);
console.log(a1.reverse());