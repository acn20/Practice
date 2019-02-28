/*
(0°C × 9/5) + 32 = 32°F
(0°F − 32) × 5/9 = -17.78°C

din Jouli in Kilocal divide the energy value by 4184
din Kcal in Jouli multiply the energy value by 4184

din Pa in Atm divide the pressure value by 101325
din Atm in Pa multiply the pressure value by 101325
*/

// CREATE ONE TEST FILE PER FUNCTION

var converterOptions = {
    "temperature": {
        "values": ["Celsius", "Fahrenheit"],
        "formulas": {
            "Celsius": {
                "Fahrenheit": convertCelsiusToFahrenheit
            },
            "Fahrenheit": {
                "Celsius": convertFahrenheitToCelsius
            }
        }
    },
    "pressure":{
        "values": [ "Pascal", "Atmosphere" ],
        "formulas": {
            "Pascal": {
                "Athmosphere": convertPascalToAtmosphere
            },
            "Atmosphere": {
                "Pascal": convertAtmosphereToPascal
            }
        }
    },
}

$(function () {
    $("#setCategory").change(function() {
        var selectedValue = $("#setCategory").val(); // selectedValue is either temperature, energy or pressure
        var options = converterOptions[selectedValue].values;

        // now use the options variable to populate both dropdowns

        $('.setUnit1').clear();
        $('.setUnit2').clear();
    })

    $('.setUnit1').val("celsius");
    $('.setUnit2').val("fahrenheit");

    var leftToRightFormula = convertCelsiusToFahrenheit;
    var rightToLeftFormula = convertFahrenheitToCelsius;

    $('.setUnit1').change(function () {
        $("#unitValue1").val("");
        $("#unitValue2").val("");

        var category = $('#setCategory').val();
        var unit1 = $('.setUnit1').val();
        // check converterOptions[value].values and set .setUnit2 to the any value that is not the same
        // as the one you selected in setUnit1. YOU MUST DO SOMETHING LIKE $('.setUnit2').val(someOtherUnit);
        var unit2 = $('.setUnit2').val(); // READ THE COMMENT ABOVE

        // then
        leftToRightFormula = converterOptions[category].formulas[unit1][unit2];
        rightToLeftFormula = converterOptions[category].formulas[unit2][unit1];
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

    var leftToRightFormula = convertPascalToAtmosphere;
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

        var units = $("#unitValue1").val() + key; // concatenate existing value with current key
        units = leftToRightFormula(units);

        $("#unitValue2").val(units);
    })

    $("#unitValue1").on('input', function () {
        var units = $("#unitValue1").val();
        if (units == "") {
            $("#unitValue2").val("");
        }
        else {
            units = leftToRightFormula(units);
            $("#unitValue2").val(units);
        }
    })

    $("#unitValue2").keydown(function (event) {
        var key = event.key;
        var units = $("#unitValue2").val() + key;

        units = rightToLeftFormula(units);

        $("#unitValue1").val(units);
    })

    $("#unitValue2").on('input', function () {
        var units = $("#unitValue2").val();
        if (units == "") {
            $("#unitValue1").val("");
        }
        else {
            units = rightToLeftFormula(units);
            $("#unitValue1").val(units);
        }
    })





    //for energy
    $('.setUnit1').val("joule");
    $('.setUnit2').val("kilocalorie");

    var leftToRightFormula = convertJouleToKilocalorie;
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

        var units = $("#unitValue1").val() + key; // concatenate existing value with current key
        units = leftToRightFormula(units);

        $("#unitValue2").val(units);
    })

    $("#unitValue1").on('input', function () {
        var units = $("#unitValue1").val();
        if (units == "") {
            $("#unitValue2").val("");
        }
        else {
            units = leftToRightFormula(units);
            $("#unitValue2").val(units);
        }
    })

    $("#unitValue2").keydown(function (event) {
        var key = event.key;
        var units = $("#unitValue2").val() + key;

        units = rightToLeftFormula(units);

        $("#unitValue1").val(units);
    })

    $("#unitValue2").on('input', function () {
        var units = $("#unitValue2").val();
        if (units == "") {
            $("#unitValue1").val("");
        }
        else {
            units = rightToLeftFormula(units);
            $("#unitValue1").val(units);
        }
    })

})