/*Fă o pagină unde ai 3 uși și în spatele uneia e premiul cel mare
Alegi una, deschizi o ușă necâștigătoare
Apoi ai șansa să schimbi ușa*/
$(function () {
    var winnerDoor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    $(".door").click(function () {
        if($(this).attr("data-id") == winnerDoor) {
            $("h2").html("YOU WON");;
        }

        else {
            winnderDoor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            $("h2").html("YOU GOT ONE MORE CHANCE");

            $(".door").click(function () {
                if($(this).attr("data-id") == winnerDoor) {
                    $("h2").html("YOU WON");;
                }

                else {
                    $("h2").html("YOU LOST");;
                }
            })
        }
    })
})