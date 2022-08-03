function showPrime(n) {
    let s = "";
    let primeArray = []
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        s += i + ",";
        primeArray.push(i);
    }
    /*alert("(string)for n = " + number + " prime numbers are " + s)*/
    alert("for n = " + number + " prime numbers are " + primeArray)
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true
}

function isInt(n) {
return n % 1 === 0;
}

let number = 0;
do {
    number = prompt("Enter a number")
    /*alert("int = " + isInt(number));
    alert("less than zero = " + (number < 0));*/
} while (number < 0 || !isInt(number));
showPrime(number);