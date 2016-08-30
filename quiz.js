var ready = confirm("Ready for the quiz?");
if (ready == true){
  alert("Alrighty then, let's begin!");
} else if (ready == false){
  alert("Ok then, why don't you go study some more.");
  window.location.href = "about";
}
