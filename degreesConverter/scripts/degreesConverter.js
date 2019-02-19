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
        $('#setUnit2').val("fahrenheit");
    }

    else if($('#setUnit2 option[value="fahrenheit"]:selected')) {
        $('#setUnit').val("celsius");
    }

    $("#unitValue").keydown(function () {
        // TODO add number validation
        var degrees = $("#unitValue").val();

        if($('#setUnit option[value="celsius"]:selected')) {
            $("#unitValue2").val(((degrees * 1.8) + 32));
        }
        else if($('#setUnit option[value="fahrenheit"]:selected')) {
            $("#unitValue2").val(((degrees - 32) * 5 / 9));
        }
    })

    $("#unitValue2").keydown(function () {
        var degrees = $("#unitValue").val();

        if($('#setUnit2 option[value="celsius"]:selected')) {
            $("#unitValue").val(((degrees * 9 / 5) + 32));
        }

        else if($('#setUnit2 option[value="fahrenheit"]:selected')) {
            $("#unitValue").val(((degrees - 32) * 5 / 9));
        }
    })
    
})