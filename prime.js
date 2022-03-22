let prime = 0;
let position = 20000000;
let ans;

let date = new Date();
console.log("start : " + date.toLocaleString());

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
for (let i = 1; i < Infinity; i++) {
    if (isPrime(i) == true) {
        prime++;
        ans = i;
    }
    if (prime === position) {
        let date2 = new Date();
        console.log("end : " + date2.toLocaleString());
        console.log(`primeAt(${position}) => ` + ans);
        break;
    }
}