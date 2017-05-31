

window.onload = function() {
  $("#start").click(run);
  $("#submit").click(stop);
  $("#questionSheet").hide();
};

var number = 100;
var startGame;
var displayQuestion = false;

function run() {
  startGame = setInterval(decrement, 1000);
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

    }

run();
