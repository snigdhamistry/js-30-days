//Activity 1:
//T1
for (let index = 0; index <= 10; index++) {
    console.log(index);
}
//T2
for (let index = 0; index <= 10; index++) {
    console.log(`5 x ${index} = `, 5 * index);
}

//Activity 4:
//T3
let i = 10
while (i > 0) {
    console.log(i);
    i--
}
//T4
let index = 0
let total = 0
while (index <= 10) {
    total = total + index
    index++
}
console.log(total);//do the log outside the loop

//Activity 5:
//T5
let ind = 1
do {
    console.log(ind);
    ind++
} while (ind <= 5);
//T6
let number = 5; 
let originalNumber = number; 
let result = 1;

do {
    result *= number;
    number--;
} while (number > 0);

console.log("The factorial of " + originalNumber + " is: " + result);

//Activity 6:
//T7
const rows = 5; // Number of rows for the triangle

for (let i = 1; i <= rows; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}

//Activity 7:
//T8
for (let index = 0; index <= 10; index++) {
    if (index===5) {
        continue
    } else {
        console.log(index);
    }
    
}
//T9
for (let index = 0; index <=10; index++) {
    if (index===7) {
        break
    } else {
        console.log(index);
    }
    
}