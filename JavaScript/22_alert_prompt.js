alert("Welcom to my webPage.!");
let a=prompt("Enter the Number :");
a=Number.parseInt(a);
alert("Type of Input :"+typeof(a));
write=confirm("You write the Number in webPage :");
if(write)
{
    document.write(a);
}