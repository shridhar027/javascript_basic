let number1 = 23;
let number2 = 23;
sum = number1 + number2;
let username = window.prompt("enter name");
let name_1 = "hello my name is ";
let name_2 = username;
console.log(sum);
console.log(name_1);
console.log(name_2);

document.getElementById("p1").innerHTML = sum;
document.getElementById("p2").innerHTML = name_1 + username;