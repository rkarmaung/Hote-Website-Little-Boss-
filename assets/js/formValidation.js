$(function () {
	//Form validation start

    $("#arrivalDate").datepicker({
      numberOfMonths: 1,
      dateFormat: "DD, d MM, yy",
      onSelect: function(selectdate){
        var dt = new Date(selectdate);
        dt.setdate(dt.getDate()+1);
        $("#departureDate").datepicker("option", "minDate", dt)
      }
    })//arrival date end

	$("#departureDate").datepicker({
	  alert("hey")
	  numberOfMonths: 1,
	  dateFormat: "DD, d MM, yy",
	  onSelect: function(selectdate){
	    var dt = new Date(selectdate);
	    dt.setdate(dt.getDate()+1);
	    $("#arrivalDate").datepicker("option", "maxDate", dt)
	  }
	})//Departure date end
	
	//Form validation end
});