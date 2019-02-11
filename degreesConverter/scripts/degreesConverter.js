/*(0°C × 9/5) + 32 = 32°F
(0°F − 32) × 5/9 = -17.78°C*/
$(function () {
    $('#showResult').click(function() {
        var radio = $('input[name="chooseDegrees"]:checked');
        var degrees = $("#degrees").val();

        if(radio.val() == "Celsius") {
            $("#result").html((degrees * 9 / 5) + 32);
        }
        else {
            $("#result").html((degrees - 32) * 5 / 9);
        }
    });
})