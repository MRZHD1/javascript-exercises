const sumAll = function(n1, n2) {
    let i = Math.min(n1, n2)
    let result = 0
    while (i <= Math.max(n1,n2)) {
        result = result + i
        i++
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
