let sum = 0;

for (let n = 1; n <= 50; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
        sum += n;
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}
console.log("Tổng các số Fizz:", sum);