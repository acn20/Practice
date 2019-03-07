/*Fă o pagină unde ai 3 uși și în spatele uneia e premiul cel mare
Alegi una, deschizi o ușă necâștigătoare
Apoi ai șansa să schimbi ușa*/
$(function () {
    var doors = [
        {
            win: false
        },
        {
            win: false
        },
        {
            win: false
        }
    ]

    var winnerDoor = Math.floor(Math.random() * (doors.length - 1 + 1)) + 1;

    doors[winnerDoor - 1].win = true;

    $(".door").click(function () {
        if($(this).attr("data-id") == winnerDoor) {
            
        }
    })

    /*$(".door").click(function () {
        if ($(this).attr("data-id") == winnerDoor) {
            $("#message").html("YOU WON");;
        }

        else {
            winnderDoor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            $("#message").html("YOU GOT ONE MORE CHANCE");

            $(".door").click(function () {
                if ($(this).attr("data-id") == winnerDoor) {
                    $("#message").html("YOU WON");;
                }

                else {
                    $("#message").html("YOU LOST");;
                }
            })
        }
    })*/
})