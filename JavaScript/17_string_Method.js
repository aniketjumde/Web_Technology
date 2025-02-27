let name="Good Morning";

console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0,4));
console.log(name.slice(5,));
console.log(name.replace("Morning","Night"));
let a="    ANIKET   "
console.log(a.trim());
console.log(name.concat(a));

console.log(name[5]);
name[6]="A"  //This is not possible Because String is Immutable
console.log(name);