var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  //If contenstant count reaches 2, change gameState to play(1)
if(contestantCount===2){
  quiz.update(1)
}
  //If gameState=1, call the play method of quiz object
if(gameState===1){
  clear()
  quiz.play()
}
}
