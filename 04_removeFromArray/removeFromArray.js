const removeFromArray = function(array, ...args) {
    let result = []
    for (index in array) {
        if (args.includes(array[index])) {
            continue
        }
        else {
            result.push(array[index])
        }
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
