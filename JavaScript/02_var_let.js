// Difference between var and let
// var are globally Scope variable && can be re-declared
// let are blocked Scope variable & re-declaration are not all

var a=10
var b=25
{
    var b=50
    console.log(b)
}
console.log(b)



//let

let c=10
{
    let c=25
    console.log(c)
}
console.log(c)