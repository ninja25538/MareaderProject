var ready = confirm("Ready for the quiz?");
if (ready == true){
  alert("Alrighty then, let's begin!");
  alert("Note, answers are case-sensitive, sorry, and please use one word answers.");
  var q1 = prompt("First question, what do the main characters travel through?");

if(q1.toLowerCase() == "time"){
  alert("COOOOOOOOOOORECT!");
} else {
  alert("You......");
  alert("Failed go read the book or look at the plot summary.");
    window.location.href = "about";
}

} else if (ready == false){
  alert("Ok then, why don't you go study some more.");
  window.location.href = "about";
}
