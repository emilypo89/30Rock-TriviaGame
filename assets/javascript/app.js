// window.onload = function() {


// variable storing the setTimout function to begin the game
var startGame;
var questionsDisplayed = false;

// on click timer starts
// displays questions page
$("#start").click(gameTimer.start);
$("#submit").click(gameTimer.stop);


var gameTimer = {

  time: 0,
  reset: function() {

    stopwatch.time = 0;
    $("#countDown").html("00:00");
  },

  start: function() {
      if (questionsDisplayed == false) {
        startGame = setInterval(gameTimer.count, 20000);
        questionsDisplayed = true;
      }

  },
  stop: function() {
    clearInterval(startGame);
    questionsDisplayed = false;

  },

  count: function() {
    gameTimer.time++;
    var converted = gameTimer.timeConverter(gameTimer.time);
    console.log(converted);
    $("#display").html(converted);
  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }


// };
