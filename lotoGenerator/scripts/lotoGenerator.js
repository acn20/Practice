function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// [0, 1) -> x 49 -> [0, 49) + 1 => [0, 50)

$(function () {
    $("#generateButton").click(function () {
        $("#generatedNumbers").html('');
        let numbers = [];
        // hint: use a while loop

        while (numbers.length < 6) {
            var x = getRandomIntInclusive(1, 49);
            if (numbers.indexOf(x) == -1) {
                numbers.push(x);
            }
        }

        for(var i = 0; i < numbers.length; i++) {
            $("#generatedNumbers").append(' ' + numbers[i]);
        }
    })
})