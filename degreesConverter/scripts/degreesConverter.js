/*(0°C × 9/5) + 32 = 32°F
(0°F − 32) × 5/9 = -17.78°C*/
$(function () {
    /*$('#showResult').click(function() {
        var radio = $('input[name="chooseDegrees"]:checked');
        var degrees = $("#degrees").val();

        if(radio.val() == "Celsius") {
            $("#result").html(((degrees * 9 / 5) + 32) + " degrees Fahrenheit");
        }
        else {
            $("#result").html(((degrees - 32) * 5 / 9) + " degrees Celsius");
        }
    });*/

    if($('#setUnit option[value="celsius"]:selected')) {
        $('#setUnit2 option[value="fhrenheit"]:selected');
    }

    else if($('#setUnit2 option[value="fhrenheit"]:selected')) {
        $('#setUnit option[value="celsius"]:selected');
    }

    $("#unitValue").change(function () {
        var degrees = $("#unitValue").val();

        if($('#setUnit option[value="celsius"]:selected')) {
            $("#unitValue2").html(((degrees * 9 / 5) + 32));
        }

        else if($('#setUnit option[value="fahrenheit"]:selected')) {
            $("#unitValue2").html(((degrees - 32) * 5 / 9));
        }
    })

    $("#unitValue2").change(function () {
        var degrees = $("#unitValue").val();

        if($('#setUnit2 option[value="celsius"]:selected')) {
            $("#unitValue").html(((degrees * 9 / 5) + 32));
        }

        else if($('#setUnit2 option[value="fahrenheit"]:selected')) {
            $("#unitValue").html(((degrees - 32) * 5 / 9));
        }
    })
    
})