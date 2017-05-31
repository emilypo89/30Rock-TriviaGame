// starts when page loads
window.onload = function() {
  $("#button1").click(run);
  $("#button1").html("Start!")
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

// countdown functions
function run() {
  startGame = setInterval(decrement, 1000);
  $("#questionSheet").show();
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

// run();
