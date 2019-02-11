/*(0°C × 9/5) + 32 = 32°F
(0°F − 32) × 5/9 = -17.78°C*/
$(function () {
    $("#switch").click(function () {
        $("#degreesInFahrenheit").toggle();
        $("#degreesInCelsius").toggle();
    })
    if ($("#degreesInCelsius").css("display") == "block") {
        $("[name|='degrees']").change(function () {
            var degrees = $("[name|='degrees']").val();
            $("#result").html((degrees * 9 / 5) + 32);
        })
    }
    else {
        $("[name|='degrees']").change(function () {
            var degrees = $("[name|='degrees']").val();
            $("#result").html((degrees - 32) * 5/9);
        })
    }
})