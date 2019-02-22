function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

$(function() {
    $("#generateButton").click(function() {
        $("#generatedNumbers").html('');

        var x1 = getRandomIntInclusive(1, 49);
        var x2 = getRandomIntInclusive(1, 49);
        var x3 = getRandomIntInclusive(1, 49);
        var x4 = getRandomIntInclusive(1, 49);
        var x5 = getRandomIntInclusive(1, 49);
        var x6 = getRandomIntInclusive(1, 49);

        $("#generatedNumbers").append(x1);
        $("#generatedNumbers").append(' ' + x2);
        $("#generatedNumbers").append(' ' + x3);
        $("#generatedNumbers").append(' ' + x4);
        $("#generatedNumbers").append(' ' + x5);
        $("#generatedNumbers").append(' ' + x6);
    })
})