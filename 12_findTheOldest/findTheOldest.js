const findTheOldest = function(people) {
    return people.sort((a, b) => 
    a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth  ? 1 : -1)[0]
};

// Do not edit below this line
module.exports = findTheOldest;
