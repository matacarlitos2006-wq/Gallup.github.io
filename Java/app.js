document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  alert("Your text has been submitted");
  
  location.reload();
}
