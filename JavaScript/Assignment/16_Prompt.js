runAgain=true


while(runAgain)
{
    let age=prompt("Enter the Age of the Person :");
    age=Number.parseInt(age);if(age>18)
    {
    alert("You can Drive .");
    }
    else
    {
    alert("You can not Drive .")
    }

    runAgain=confirm("If You want to see prompt again :")
}