var plateNumbers = [{
    region: "AB",
    number: 999,
    letters: EXS
}, {
    region: "IF",
    number: 349,
    letters: RFB
},
{
    region: "SC",
    number: 999,
    letters: RBS
},
{
    region: "BI",
    number: 999,
    letters: ODV
},
{
    region: "CJ",
    number: 999,
    letters: AMC
},
{
    region: "TI",
    number: 999,
    letters: MDA
},
{
    region: "BU",
    number: 999,
    letters: QMD
}]

$(function () {
    $("#check").click(function () {
        if ($("#region").val().length == 2 && $("#number").val().length == 3 && $("#letters").val().length == 3) {
            $("#message").html("Valid plate number");
            //if (!parseInt($("#number").val())) {//this function returns a number only if the argument contains a number (key is a string)
            //    return false
            //};
        }

        for (var i = 0; i < plateNumbers.length; i++) {
            if (plateNumbers[i].region == $("#region").val()) {

            }
        }
    })
})