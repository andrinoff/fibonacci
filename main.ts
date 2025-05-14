// Global variables for keeping x_n+1 x_n
let fib1 = BigInt(1)
let fib2 = BigInt(1)
let fib3 = BigInt(0)




<<<<<<< HEAD
function fibonacci(n) {
=======
export default function fibonacci(n) {
>>>>>>> ff94a53 (added api)
    if (n == 1) {
        console.log(1)
        return
    }
    else if (n == 2) {
        console.log(1 + ", " + 1)
        return
    }
    for (n -2; n>0;) {

        console.log(fib1 + ", ")
        fib1 = fib2+fib3
        fib3 = fib2
        fib2 = fib1

        n--
    }

}


fibonacci(10)