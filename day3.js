//Activties:
//T1:
let number=-1000000
if (number>0) {
    console.log(`number ${number } is positive` );
} else if(number===0) {
    console.log(`number ${number } is zero`);
}else{
    console.log(`number ${number } is negative`);
}
//T2
let age =25
if (age>=18) {
    if (age>18) {
        console.log(`now you are ${age}you can vote`);
    } 
    else {
        console.log(`you are 18 you can vote`);
    }
}
else{console.log(`you are not able to  vote`);}

//Activity 2:
//T1
let a=1,b=2,c=3
if (a>b&&a>c) {
    console.log(`a =${a}is the leargest number`);
} else if (b>a&&b>c){
    console.log(`b=${b}is the leargest number`);
}
else{console.log(`c=${c}is the leargest number`);}

//Activity 3:
//T4
let month=18
switch (month) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('may');
        break;
    case 6:
        console.log('jun');
        break;
    case 7:
        console.log('july');
        break;
    case 8:
        console.log('august');
        break;
    case 9:
        console.log('sept');
        break;
    case 10:
        console.log('oct');
        break;
    case 11:
        console.log('nov');
        break;
    case 12:
        console.log('dec');
        break;
    default:
        console.log('plz enter a valid mounth');
        break;
}
//T5
let mynumber= 0
switch (true) {
    case(mynumber<30&&mynumber>=0):
        console.log('your grade is F ');
        break;
    case(mynumber>30&&mynumber<50):
        console.log('your grade is D');
        break;
    case(mynumber>50&&mynumber<70):
        console.log('your grade is C ');
        break;
    case(mynumber>70&&mynumber<80):
        console.log('your grade is B ');
        break;
    case(mynumber>80&&mynumber<100):
        console.log('your grade is A ');
        break;

    default:
        console.log('plz enter a number inside 0 to 100');
        break;
}

//Activity 4:
//T6
let num=2
let type=(num%2)==0?'even':'odd'
console.log(type);

//Activity 5:
//T7
let year = 2004;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);
        }
    } 
else {
    console.log(`${year} is a leap year`);
    }
} else {
    console.log(`${year} is not a leap year`);
}
//-----the end------👩🏽‍💻☕
