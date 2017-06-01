// starts when page loads
window.onload = function() {
  $("#button1").click(run);
  $("#button1").html("Push to Start the Game!")
  $("#submit").click(stop);
  $("#questionSheet").hide();
  $("#button2").hide();
  $("#button3").hide();
  $("#button4").hide();

};

// variables
var number = 30;
var startGame;
var displayQuestion = false;
var correctGuess = 0;
var incorrectGuess = 0;
var noResponse = 10;
var currentQuestion = 0;
// var userInput = event.key;
var questionCounter = 0;


var questions = [{
    question: "What does TGS stand for?",
    choices: ["That Great Show", "The Girly Show", "The Green Show", "The Gray Shadow"],
    correctAnswer: [1]
}, {
    question: "Who does Liz Lemon end up marrying?",
    choices: ["Criss Cross", "Dennis Duffy", "Carol, the Pilot", "Floyd"],
    correctAnswer: [0]
}, {
    question: "Who are the Stars of TGS?",
    choices: ["Frank and Toofer", "Kenneth and Pete", "Jenna Maroney and Tracy Morgan", "Jennifer Maroney and Tracy Jordon"],
    correctAnswer: [2]
}, {
    question: "Who is Liz Lemon's mentor?",
    choices: ["Jack Donaghy", "Avery Jessup", "Pete Hornberger", "Hank Hooper"],
    correctAnswer: [1]
}, {
    question: "Jenna gains weight while working on what musical?",
    choices: ["The Rural Juror", "Charlie and the Chocolate Factory: The Musical", "Annie", "Mystic Pizza: The Musical"],
    correctAnswer: [3]
}, {
    question: "What is the name of the hit party song Tracy has a gold record for?",
    choices: ["Ghost Party", "Bewitched", "Werewolf Bar Mitzvah", "Monster Mash"],
    correctAnswer: [2]
}, {
    question: "What town is Kenneth Parcell, the NBC page, from?",
    choices: ["Green Mountain, Georgia", "Stone Mountain, Georgia", "Little Mountain, Mississippi", "Red Mountain, Mississippi"],
    correctAnswer: [1]
}, {
    question: "What Sport did NBC not make up during the Olympics to make people believe America won more medals?",
    choices: ["Lawn Bowling", "Octoples Tennis", "Olympic Thetherball", "Synchronized Running"],
    correctAnswer: [0]
}, {
    question: "What meal does Lutz instits upon ordering for TGS's last episode?",
    choices: ["Subway", "Gas Station Hot Dogs", "Marshmallows", "Blimpies"],
    correctAnswer: [3]
}, {
    question: "Who does Liz Lemon dress up as to get out of jury duty?",
    choices: ["Princess Leia", "Wonder Woman", "Catwoman", "Batman"],
    correctAnswer:[0]   
}];

// countdown functions
function run() {
  startGame = setInterval(decrement, 1000);
  $("#button2").show();
  $("#button3").show();
  $("#button4").show();

  displayCurrentQuestion();
}

function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(startGame);
  $("#button1").hide();  
  $("#button2").hide();
  $("#button3").hide();
  $("#button4").hide();
  // add here the score stats display in the question div!
  // maybe have a restart function
    }


function displayCurrentQuestion () {
  // var currentQuestion = questions[currentQuestion].question;
  // var numChoices = questions[currentQuestion].choices.length;

  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].question);
    $("#question").html(questions[i].question);
    $("#button1").html(questions[i].choices[0]);
    $("#button2").html(questions[i].choices[1]);
    $("#button3").html(questions[i].choices[2]);
    $("#button4").html(questions[i].choices[3]);
  }
  questionCounter++;

}



if (userguess === questions[i].correctAnswer)
  if (questions[i].correctAnswer == choices[i]) {
    correctGuess++;
    displayCurrentQuestion();
    $("submit").click(run);
  }
}

if (questionCounter > 10) {
  stop();
}

