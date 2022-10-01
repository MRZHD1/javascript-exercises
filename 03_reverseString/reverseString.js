const reverseString = function(string) {
    const newArray = string.split("")
    let reversedArray = []
    for (const i in newArray) {
        reversedArray.unshift(newArray[i])
    }
    return reversedArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
