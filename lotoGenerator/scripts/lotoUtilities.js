function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateNumbers(min, max, count) {
    let numbers = [];

    while (numbers.length < count) {
        var x = getRandomIntInclusive(min, max);
        if (numbers.indexOf(x) == -1) {
            numbers.push(x);
        }
    }

    return numbers;
}