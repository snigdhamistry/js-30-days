//Activity 1
//T1
function num(int) {
    if (int%2===0) {
        console.log(`this number ${int}is even `)
    } else {
        console.log(`this number ${int}is odd`);
    }
}
num(25)
//T2
function squareofanum(number) {
    let square=number*number
    return square
}
console.log(squareofanum(2));
//Activity 2:
//T3
function max(number1,number2) {
    if (number1>number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(`maximun number is ${max(20,1)}`); 
//T4
function concatinate(string1,strings) {
    return string1+strings
}
console.log(`hi there, ${concatinate('myself ' ,'Snigdha')}`);

//Activity 3:
//T5
let arrowfunction=(num1,num2)=>{
    return num1+num2
}
console.log(`value of arrow function is ${arrowfunction(3,2)}`);
//T6
let checkstring = (string)=>{
    return string.includes("i")
}//we can aachive the same result using the explicit return
console.log(checkstring("snigdha"));

//Activity 4:
//T7
let defaultfunction = (a,b=5)=>{
    return a*b
}
console.log(defaultfunction(2))
//T8
function person(names,ages=18) {
    return `hi ${names} you are ${ages} nice to meet you `
}
console.log(person("snigdha"));

//Activity 5:
//T9
function callntimes(func,n) {
    return function () {
        for (let i = 0; i < n; i++) {
            func()
        }
    }
}
function sayhello() {
    console.log("hello");
}
const sayhello5times = callntimes(sayhello,5)
sayhello5times()
//T10 
function composeTwo(func1, func2, value) {
    return func2(func1(value));
}

// Example usage:
function add3(x) {
    return x + 3;
}

function multiplyBy2(x) {
    return x * 2;
}

const result = composeTwo(add3, multiplyBy2, 5);
console.log(result);  // This will log 16 because (5 + 3) * 2 = 16
