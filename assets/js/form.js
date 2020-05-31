var checkAvaBtn = document.querySelector("#checkAvaBtn");

checkAvaBtn.addEventListener("click", function(){
  var checkArray =[];
  var submitAvailability = true;
  var today = new Date();
  //today.setHours(0,0,0,0);
  var errorDiv = document.querySelectorAll(".errorDiv");
  
  //Checking Check-in date
  var arrivalDate = document.getElementById("arrivalDate").value;
  var varArrivalDate = new Date(arrivalDate);
  if(varArrivalDate >= today) {
    //Do something..
    alert("future")
    errorDiv[0].style.display = "none";
    checkArray.push(true);
  }else if(varArrivalDate <= today || arrivalDate.length == 0){
    errorDiv[0].style.display = "block";
    errorDiv[0].innerHTML = "Check-in Date is invalid. ";
    checkArray.push(false);
  }

  //Checking Check-out date
  var departureDate = document.getElementById("departureDate").value;
  var varDepartureDate = new Date(departureDate);
  if(varDepartureDate >= today) {
    //Do something..
    alert("future")
    errorDiv[1].style.display = "none";
    checkArray.push(true);
  }else if(varDepartureDate <= today || departureDate.length == 0 || varDepartureDate <= varArrivalDate){
    errorDiv[1].style.display = "block";
    errorDiv[1].innerHTML = "Check-out Date is invalid. ";
    checkArray.push(false);
  }
  
  for(var i=0; i<checkArray.length; i++){
    if(checkArray[i]==false){
      submitAvailability = false;
    }
  }
  if(submitAvailability==true){
    alert("Checking Availability . . . plz wait . . . .")
  } else{
    alert("Error")
  }
});