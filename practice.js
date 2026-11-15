/*let numbers = 7;
let candidate = 0;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < candidate) {
    total = total + candidate[i];}
}
console.log(total);

let number = 7;
let candidate = 0;
while (candidate < number) {
    candidate= candidate + 2;
}

if (candidate === number) {
    console.log ("even");
} else {
    console.log("odd");
}*/

/*
function dayName(dayNumber){
    switch (dayNumber) {
    case 1:
    return 'Monday';
    case 2: 
    return 'Tuesday';
    case 3:
        return 'Wednesday';
    case 4:
        return 'Thursday';
    case 5:
        return 'Friday';
    case 6:
        return 'Saturday';
    case 7:
        return 'Sunday';
    case 8:
    return 'Invalid'
}

}
console.log(dayName(7));*/

function countVowels(text) {
    let count=0;
    for (let i=0; i< text.length; i++){
    switch(text[i]){
        case 'a':
        count = count + 1;
        break;
        case 'e':
        count = count + 1;
        break;
        case 'i':
        count = count + 1;
        break;
        case 'o':
        count = count + 1;
        break;
        case 'u':
        count = count + 1;
        break;
        case 'A':
        count = count + 1;
        break;
        case 'E':
        count = count + 1;
        break;
        case 'I':
        count = count + 1;
        break;
        case 'O':
        count = count + 1;
        break;
        case 'U':
        count = count + 1;
        break;
            
    }
    }
    return count;
}
console.log(countVowels('Abigail'));