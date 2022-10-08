const palindromes = function (string) {
    filtered = [...string].filter(letter => {
        return !['!','.',',',' ', '?'].includes(letter)
    })
    return filtered.join('').toLowerCase() == filtered.reverse().join("").toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
