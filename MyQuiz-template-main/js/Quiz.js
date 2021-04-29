class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
	//write code to hide question elements
	question.hide()
	//write code to change background color to yellow
background("yellow")
	//write code to show a heading for showing the result of Quiz
textSize(18)
text("Results!",340,50)
	//call getContestantInfo() method of contestant class
Contestant.getPlayerInfo()
	//Follow instruction 5-8 in the project document and implement it.
if(allContestants !== undefined){
  textSize(18)
  text("*Note contestants who have answered correctly are highlighted in green*",130,230)

  var display_Answers = 230;
  for(var plr in allContestants){
    var correctAns="2"
  
    if(correctAns===allContestants[plr].answer){
      fill("green")
    }
      else{
      fill("red")
    }
    display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      
  }
  }
}
}
  

