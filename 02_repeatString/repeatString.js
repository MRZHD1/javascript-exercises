const repeatString = function(string, num) {
    if (num >= 0) {
        return string.repeat(num)
    }
    else {
        throw Error
    }
};

// Do not edit below this line
module.exports = repeatString;
