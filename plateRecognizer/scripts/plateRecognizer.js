var counties = ["AB", "AR", "AG", "BC", "BH", "B", "CS", "IL", "IF", "TR", "TM"]
var countiesFull = ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bucuresti", "Caras-Severin", "Ialomita", "Ilfov", "Transilvania", "Timis"]

$(function () {
    $("#check").click(function () {
        if ($("#number").val().length == 3 && $("#letters").val().length == 3) {
            for (var i = 0; i < counties.length; i++) {
                if (counties[i] == $("#region").val()) {
                    $("#message").html("Valid plate number from " + countiesFull[i]);
                    //if (!parseInt($("#number").val())) {//this function returns a number only if the argument contains a number (key is a string)
                    //    return false
                    //};
                }

                else {
                    $("#message").html("Invalid plate number");
                }
            }
        }
        else {
            $("#message").html("Invalid plate number");
        }
    })
})