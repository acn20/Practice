/*(0°C × 9/5) + 32 = 32°F
(0°F − 32) × 5/9 = -17.78°C*/

var convertCelsiusToFahrenheit = function (degrees) {
    return (degrees * 1.8) + 32;
}

var convertFahrenheitToCelsius = function (degrees) {
    return (degrees - 32) * 5 / 9;
}

$(function () {
    $('#setUnit1').val("celsius");
    $('#setUnit2').val("fahrenheit");

    var leftToRightFormula = convertCelsiusToFahrenheit;
    var rightToLeftFormula = convertFahrenheitToCelsius;

    $('#setUnit1').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('#setUnit1').val() == "celsius") {
            $('#setUnit2').val("fahrenheit");
            leftToRightFormula = convertCelsiusToFahrenheit;
            rightToLeftFormula = convertFahrenheitToCelsius;
        } else if ($('#setUnit1').val() == "fahrenheit") {
            $('#setUnit2').val("celsius");
            leftToRightFormula = convertFahrenheitToCelsius;
            rightToLeftFormula = convertCelsiusToFahrenheit;
        }
    });

    $('#setUnit2').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('#setUnit2').val() == "fahrenheit") {
            $('#setUnit1').val("celsius");
            leftToRightFormula = convertCelsiusToFahrenheit;
            rightToLeftFormula = convertFahrenheitToCelsius;
        } else if ($('#setUnit2').val() == "celsius") {
            $('#setUnit1').val("fahrenheit");
            leftToRightFormula = convertFahrenheitToCelsius;
            rightToLeftFormula = convertCelsiusToFahrenheit;
        }
    });

    $("#unitValue1").keypress(function (event) {//obiect cu proprietatea key
        var key = event.key;//key reprezinta ce tasta a fost apasata
        if (!parseInt(key)) {//this function returns a number only if key contains a number (key is a string)
            return false;
        }

        var degrees = $("#unitValue1").val() + key; // concatenate existing value with current key
        degrees = leftToRightFormula(degrees);

        $("#unitValue2").val(degrees);
    })

    $("#unitValue1").on('input', function () {
        var degrees = $("#unitValue1").val();
        if (degrees == "") {
            $("#unitValue2").val("");
        }
        else {
            degrees = leftToRightFormula(degrees);
            $("#unitValue2").val(degrees);
        }
    })

    $("#unitValue2").keydown(function (event) {
        var key = event.key;
        var degrees = $("#unitValue2").val() + key;

        degrees = rightToLeftFormula(degrees);

        $("#unitValue1").val(degrees);
    })

    $("#unitValue2").on('input', function () {
        var degrees = $("#unitValue2").val();
        if (degrees == "") {
            $("#unitValue1").val("");
        }
        else {
            degrees = rightToLeftFormula(degrees);
            $("#unitValue1").val(degrees);
        }
    })

})