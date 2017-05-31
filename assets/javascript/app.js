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
var number = 100;
var startGame;
var displayQuestion = false;
var correctAnswers = 0;
var incorrectAnswers = 0;
var noResponse = 10;

// countdown functions
function run() {
  startGame = setInterval(decrement, 1000);
  $("#button2").show();
  $("#button3").show();
  $("#button4").show();
  // add here the first question added to id question and the answers within the buttons

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

