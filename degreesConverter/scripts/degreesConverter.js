/*
(0°C × 9/5) + 32 = 32°F
(0°F − 32) × 5/9 = -17.78°C

din Jouli in Kilocal divide the energy value by 4184
din Kcal in Jouli multiply the energy value by 4184

din Pa in Atm divide the pressure value by 101325
din Atm in Pa multiply the pressure value by 101325
*/

var convertCelsiusToFahrenheit = function (degrees) {
    return (degrees * 1.8) + 32;
}

var convertFahrenheitToCelsius = function (degrees) {
    return (degrees - 32) * 5 / 9;
}

var convertJouleToKilocalorie = function (degrees) {
    return (degrees / 4184);
}

var convertKilocalorieToJoule = function (degrees) {
    return (degrees * 4184);
}

var ConvertPascalToAtmosphere = function (degrees) {
    return (degrees / 101325);
}

var ConvertAtmosphereToPascal = function (degrees) {
    return (degrees * 101325);
}

$(function () {
    $("#setCategory").change(function() {
        if($("#setCategory").val() == "temperature") {
            $("#temperatureDropdown1").show();
            $("#temperatureDropdown2").show();
            $("#energyDropdown1").hide();
            $("#energyDropdown2").hide();
            $("#pressureDropdown1").hide();
            $("#pressureDropdown2").hide();
        }

        else if($("#setCategory").val() == "pressure") {
            $("#pressureDropdown1").show();
            $("#pressureDropdown2").show();
            $("#temperatureDropdown1").hide();
            $("#temperatureDropdown2").hide();
            $("#energyDropdown1").hide();
            $("#energyDropdown2").hide();
        }

        else if($("#setCategory").val() == "energy") {
            $("#energyDropdown1").show();
            $("#energyDropdown2").show();
            $("#temperatureDropdown1").hide();
            $("#temperatureDropdown2").hide();
            $("#pressureDropdown1").hide();
            $("#pressureDropdown2").hide();
        }
    })

    $('.setUnit1').val("celsius");
    $('.setUnit2').val("fahrenheit");

    var leftToRightFormula = convertCelsiusToFahrenheit;
    var rightToLeftFormula = convertFahrenheitToCelsius;

    $('.setUnit1').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('.setUnit1').val() == "celsius") {
            $('.setUnit2').val("fahrenheit");
            leftToRightFormula = convertCelsiusToFahrenheit;
            rightToLeftFormula = convertFahrenheitToCelsius;
        } else if ($('.setUnit1').val() == "fahrenheit") {
            $('.setUnit2').val("celsius");
            leftToRightFormula = convertFahrenheitToCelsius;
            rightToLeftFormula = convertCelsiusToFahrenheit;
        }
    });

    $('.setUnit2').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('.setUnit2').val() == "fahrenheit") {
            $('.setUnit1').val("celsius");
            leftToRightFormula = convertCelsiusToFahrenheit;
            rightToLeftFormula = convertFahrenheitToCelsius;
        } else if ($('.setUnit2').val() == "celsius") {
            $('.setUnit1').val("fahrenheit");
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




    
    //for pressure
    $('.setUnit1').val("pascal");
    $('.setUnit2').val("atmosphere");

    var leftToRightFormula = ConvertPascalToAtmosphere;
    var rightToLeftFormula = convertAtmosphereToPascal;

    $('.setUnit1').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('.setUnit1').val() == "pascal") {
            $('.setUnit2').val("atmosphere");
            leftToRightFormula = convertPascalToAtmosphere;
            rightToLeftFormula = convertAtmosphereToPascal;
        } else if ($('.setUnit1').val() == "atmosphere") {
            $('.setUnit2').val("pascal");
            leftToRightFormula = convertAtmosphereToPascal;
            rightToLeftFormula = convertPascalToAtmosphere;
        }
    });

    $('.setUnit2').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('.setUnit2').val() == "atmosphere") {
            $('.setUnit1').val("pascal");
            leftToRightFormula = convertPascalToAtmosphere;
            rightToLeftFormula = convertAtmosphereToPascal;
        } else if ($('.setUnit2').val() == "pascal") {
            $('.setUnit1').val("atmosphere");
            leftToRightFormula = convertAtmosphereToPascal;
            rightToLeftFormula = convertPascalToAtmosphere;
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





    //for energy
    $('.setUnit1').val("joule");
    $('.setUnit2').val("kilocalorie");

    var leftToRightFormula = ConvertJouleToKilocalorie;
    var rightToLeftFormula = convertKilocalorieToJoule;

    $('.setUnit1').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('.setUnit1').val() == "joule") {
            $('.setUnit2').val("kilocalorie");
            leftToRightFormula = convertJouleToKilocalorie;
            rightToLeftFormula = convertKilocalorieToJoule;
        } else if ($('.setUnit1').val() == "kilocalorie") {
            $('.setUnit2').val("joule");
            leftToRightFormula = convertKilocalorieToJoule;
            rightToLeftFormula = convertJouleToKilocalorie;
        }
    });

    $('.setUnit2').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        if ($('.setUnit2').val() == "kilocalorie") {
            $('.setUnit1').val("joule");
            leftToRightFormula = convertJouleToKilocalorie;
            rightToLeftFormula = convertKilocalorieToJoule;
        } else if ($('.setUnit2').val() == "joule") {
            $('.setUnit1').val("kilocalorie");
            leftToRightFormula = convertKilocalorieToJoule;
            rightToLeftFormula = convertJouleToKilocalorie;
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