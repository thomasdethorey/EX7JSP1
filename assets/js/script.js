function clic(){
  var shoeSize = document.getElementById("shoeSize").value;
  var yearOfBirth = document.getElementById("yearOfBirth").value;
  var result = (((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1768);
  if (!isNaN(shoeSize) && (!isNaN(yearOfBirth))){
    return result;
  } else {
    alert("Ta pointure et/ou ton année doit être un nombre !");
  }
}
