//ForEach : Calls  a function onec for each arrya element
// array.forEach((value,index,array)={ function logic });   

let a1=[45,21,67,98];
a1.forEach((value,index,a1)=>
{
    console.log(value,index,a1);
})


//map() : create  a new array by performing  some Operation on each array element 
let a2=[45,21,67,98];
console.log(a2);
a2=a2.map((value,index,a2)=>
{
    console.log(value,index);
    return value+index;
})

console.log(a2);

//Filter : can be array with values  that passes a text  ctreats a new array

let a3=[24,23,7,9,12,14,45,89];
let a4=a3.filter((value)=>
{
    return value<15 
})
console.log(a4);

//Array Reduce : Reduce on arrya   from a sing value

let arr=[1,2,4,1,2];
let newarr=arr.reduce((h1,h2)=>
{
    return h1 +h2;
})
console.log(newarr);