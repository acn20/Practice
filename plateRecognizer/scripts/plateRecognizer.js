var counties = ["AB", "AR", "AG", "BC", "BH", "BN", "B", "BT", "BR", "BV", "BZ", "CL", "CS", "CJ", "CV", "IL", "IF", "TR", "TM", "MM", "CT", "IS", "DB", "DJ", "GL", "GR", "GJ", "HR", "HD", "MH", "NT", "OT", "PH", "SM", "SJ", "SB", "SV", "TL", "VS", "VL", "VN"]
var countiesFull = ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Bucuresti", "Botosani", "Braila", "Brasov", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Covasna", "Ialomita", "Ilfov", "Teleorman", "Timis", "Maramures", "Constanta", "Iasi", "Dambovita", "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Mehedinti", "Neamt", "Olt", "Prahova", "Satu Mare", "Salaj", "Sibiu", "Suceava", "Tulcea", "Vaslui", "Valcea", "Vrancea"]

$(function () {
    $("#check").click(function () {
        var count = 0;
        if ($("#number").val().length == 3 && $("#letters").val().length == 3) {
            for (var i = 0; i < counties.length; i++) {
                if (counties[i] == $("#region").val()) {
                    $("#message").html("Valid plate number from " + countiesFull[i]);
                    //if (!parseInt($("#number").val())) {//this function returns a number only if key contains a number (key is a string)
                    //    return false
                    //};
                    count++;
                }
            }

            if (count == 0) {
                $("#message").html("Invalid plate number");
            }
        }
        else {
            $("#message").html("Invalid plate number");
        }
    })
})