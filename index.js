function sum(a, b) {
    return a + b;
}
console.log(sum(2, 5));

//Print My Name
function myName(name){
    console.log(name);
} 
myName("Pipe")

//Print Hello World

function Welcome(message){
    console.log(message);
}
Welcome("Hello World")

//print the numbers from 1 to 10.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//calculate the sum of two numbers (e.g., 2 + 3).
function sum(a , b){
    return a + b;
}
console.log(sum(2,3));

//find the product of two numbers (e.g., 4 * 5).
function product(a , b){
    return a * b;
}
console.log(product(4, 5));

//calculate the average of three numbers (e.g., (2 + 4 + 6) / 3).
function average(a, b, c, d){
    return (a + b + c) / d;
}
console.log(average(2, 4, 6, 3));

//check if a number is positive or negative.
function check(i){
    if (i>0){
        console.log(i + " is positive");
    } else if (i<0){
        console.log(i + "is negative");
    } else {
        console.log(i + "is zero");
    }
}
check(2);
check(-8.9);
check(0);
check(-46788.23);

//check if a number is even or odd.
function check(number){
    if (number % 2 == 0){
        console.log(number + " is even. ");
    } else {
        console.log(number + " is odd")
    }
}
check(3);
check(50);

//find the maximum of two numbers.
function maximum(a , b){
    if (a > b){
        console.log( a + " is bigger than " + b);
    }else if (b > a){
        console.log( b + " is bigger than " + a);
    }else {
        console.log(a == b);
    }
} maximum(2 , 5);
maximum(7 , 5);
maximum(2 , 2);

// find the minimum of two numbers.
function minimum(a , b){
    if (a < b){
        console.log(a + " is the minimum of the two numbers " + a + " and " + b);
    }else if (a > b){
        console.log ( a + " is the maximum of the two numbers " + a + " and " + b);
    }else{
        console.log ( a + " and " + b + " are equal")
    }
} minimum( 5, 11);
 minimum(71 , 0.5);
 minimum(7, 7);

 // check if a number is a multiple of another number.
 function multiple (a, b){
    if (a % b == 0 ){
        console.log(b + " is a multiple of " + a);
    }else{
        console.log(b + " is not a multiple of " + a);
    }
 } multiple (64, 2);
 multiple (17, 10);

 // count the number of characters in a string
 function count(string){
    let countString =string.length;
    console.log(countString);
 }count("I am Pipe");
 count("Who are you?");

 // convert Celsius to Fahrenheit (e.g., 25°C = 77°F).
 function convert (c){
    let f = 9/5 * (c + 32)
    console.log("The new temperature is " + f  + "degrees Farenheit");
 }convert(9);

 // convert Fahrenheit to Celsius (e.g., 77°F = 25°C).
 function convert (f){
    let c = 5/9 * (f - 32);
    console.log("The new temperature is " + c + " degree Celcius");
 }convert(77);

 //  check if a number is divisible by 2 and 3.

 function check (a){
    if (a % 2 && a % 3 == 0 ){
    console.log (a + " is divisible by 2 and 3 ");
    }else{
        console.log ( a + " is not divisible by 2 and 3");
    }
 }check(5);
 check(30);

 //Write a program to reverse a string.
 function reverse(string){
    for (var i = 0; i <= string.length; i--) {
        console.log("string")
    }
 }reverse(Pipe);