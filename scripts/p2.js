
/*function displaStat(n) {
    for()
}*/
function isInt(n) {
    return n % 1 === 0;
}
const numberArray = [];
let number = 0;
let i = 0;
let sum = 0;
do {
    number = prompt("Enter a number")
    number = parseInt(number);
    if (number >= 0 && isInt(number)) {
        numberArray.push(number);
        sum = sum += number;
    }
    alert(numberArray)
    /*  alert("int = " + isInt(number));
      alert("less than zero = " + (number < 0));*/
} while (number >= 0 && isInt(number));
alert(numberArray)
alert("sum = " + sum)

let arrayLength = numberArray.length();
alert("arrayLength= "+ arrayLength)
//let avg = sum / numberArray.length();

let minVal = Math.min.apply(Math, numberArray);
let maxVal = Math.max.apply(Math, numberArray);
alert("min = " + minVal)
function displaStat(array) {
    if (array.length == 0) {
        alert("For the list that is empty, the average is 0, the minimum is 0");
    } else {
        alert("For the list " + numberList + ", the average is " + avg.toFixed(2) +
            ", the minimum is " + minVal + ", and the maximum is "
            + maxVal);
    }
}
displaStat(numberArray);
/*alert("numberArray = " + numberArray);
alert("average is " + average);*/