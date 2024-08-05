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





