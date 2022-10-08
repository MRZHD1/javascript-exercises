const fibonacci = function(num) {
    input = parseInt(num)
    if (input < 0) {
        return 'OOPS'
    }
    fib = [1,1]
    for (let i = 2; i < input; i++) {
        fib.push(fib[i-2] + fib[i-1])
    }
    return fib[input-1]
};

// Do not edit below this line
module.exports = fibonacci;
