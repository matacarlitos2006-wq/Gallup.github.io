document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  document.getElementById("message").textContent = "Your text has been submitted";

  setTimeout(function() {
    location.reload();
  }, 2000);
});
