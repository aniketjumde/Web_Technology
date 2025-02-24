let age = prompt("What is your age?");
age=Number.parseInt(age);

if (age < 18) {
    console.log("You are not able to drive.");
} else {
    console.log("You can drive a bike.");
}