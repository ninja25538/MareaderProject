var ready = confirm("Ready for the quiz?");
if (ready === true){
  alert("Alrighty then, let's begin!");
  alert("Note, answers are case-sensitive, sorry, and please use one word answers.");
  var q1 = prompt("First question, what do the main characters travel through?");

if(q1.toLowerCase() == "time"){
  alert("COOOOOOOOOOORECT!");
  prompt("Is this too easy for you?");
  alert("Well ok then");
  alert("Next question....");
  var q2 = prompt("What is the name of Jonah's sister?");
  if(q2.toLowerCase() == "katherine"){
    alert("Eh ,guess what....");
    alert("You got it right!");
    alert("Impressive...");
    prompt("What is my favorite character in the book?");
    alert("Just kidding =)");
    var q3 = prompt("What does JB stand for in the book. (this time you use two words)");
    if(q3.toLowerCase() == "janitor boy"){
      alert("Yep, you really did study, didn't you");
      var q4 = prompt("Does JB want to send them to the past or to the future?");
      if(q4.toLowerCase() == "past"){
        alert("Nice, nice final question!");
        var q5 = prompt("What is Jonah's friend's name?");
        if(q5.toLowerCase() == "chip"){
          alert("YEAH!");
          alert("You win......");
          alert("Nothing yet, there is one more question.");
          var q6 = prompt("What is the name of this book?");
          if(q6.toLowerCase() == "found"){
           alert("YOU WIN......");
           alert("Drumroll please....");
           alert("A link to my game (that I'm still working on)!");
           alert("And an air 5");
           var rating = prompt("On a scale of 1-10, how did you like this quiz");
           alert("A " + rating + " ok");
           alert("Here, I'll send you to my project, it is not even close to done so...");
          }
        } else {
          alert("You have a real CHIP on the shoulder, don't you.");
          window.location.href = "https://en.wikipedia.org/wiki/Potato_chip";
        }
      } else {
        alert("Sorry, keep trying.");
            window.location.href = "about";
      }
    } else if (q3.toLowerCase() == "justin bieber"){
      alert("BABY BABY BABY! OH LIKE BABY BABY BABY OH!");
      alert("Wow, I didn't know Justin Bieber was in the book! (Your wrong btw)");
      window.location.href = "https://www.youtube.com/watch?v=kffacxfA7G4";
    } else {
      alert("Nope, sorry, why don't you try using Justin Bieber for that question?");
      window.location.href = "about";
  }  
  }  else  if (q2.toUpperCase() == "JOHN CENA"){
  alert("AND HIS (HER) NAME IS JOHN CENA!!");
  window.location.href = "https://www.youtube.com/watch?v=Uufq_PFXbpA";
} else {
    alert("Nooooooo, is her name possibly john cena (Try using that)");
  }
} else {
  alert("Nope, go study.");
  window.location.href = "about";
}
} else if (ready === false){
  alert("Ok then, why don't you go study some more.");
  window.location.href = "about";
}
