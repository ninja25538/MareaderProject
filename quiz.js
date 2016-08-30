var ready = confirm("Ready for the quiz?");
if (ready == true){
  alert("Alrighty then, let's begin!");
  alert("Note, answers are case-sensitive, sorry, and please use one word answers.");
  var q1 = prompt("First question, what do the main characters travel through?");

if(q1.toLowerCase() == "time"){
  alert("COOOOOOOOOOORECT!");
  prompt("Is this too easy for you?");
  alert("Well ok then")
  alert("Next question....");
  var q2 = prompt("What is the name of Jonah's sister?");
  if(q2.toLowerCase() == "katherine"){
    alert("Eh ,guess what....");
    alert("You got it right!");
    alert("Impressive...");
    prompt("What is my favorite character in the book?");
    alert("Just kidding =)");
    var q3 = prompt("What does JB stand for (this time you can use two words)");
    if(q3.toLowerCase() == "janitor boy"){
      alert("Yep, you really did study, didn't you");
      var q4 = prompt("Does JB want to send them to the past or to the future?");
      if(q4 == "past"){
        alert("Nice, nice final question!");
      } else {
        alert("Sorry, keep trying.");
            window.location.href = "about";
      }
    }
  } else {
    alert("NOPE! Go read the plot summary a little better");
    window.location.href = "about";
  }
} else {
  alert("You......");
  alert("Failed go read the book or look at the plot summary.");
    window.location.href = "about";
}

} else if (ready == false){
  alert("Ok then, why don't you go study some more.");
  window.location.href = "about";
}
