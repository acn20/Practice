function airportsTools() {
    this.createAirportElement = function (airport) {
        var clone = $("#airportTemplate").clone(); // :)
        clone.attr("id", null);
        /*si vezi ca nu trb sa pui $(clone)
       folosesti direct clone
       functiile jQuery precum clone() returneaza deja obiecte jQuery
       deci nu trb sa le pui cu $*/

        clone.find(".name").html(airport.name);
        clone.find(".code").html(airport.code);
        clone.find(".city").html(airport.city);
        clone.find(".state").html(airport.state);
        clone.find(".country").html(airport.country);
        clone.find(".tz").html(airport.tz)
        clone.find(".icao").html(airport.icao);

        return clone;
    }
}