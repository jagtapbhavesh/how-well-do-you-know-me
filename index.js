import readlineSync from 'readline-sync';

var score = 0;

// creating a function 
function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer == answer){
        console.log("You are right !!");
        score++;
    } else {
        console.log("You are wrong !!");
        score--;
    }
}

// calling the function
play("What is my name?","Bhavesh")
play("What is my age ?", "20");
play("Anime or Shopping", "Anime");
play("Cricket or Football", "Football");
play("Food or Relationship", "Food");
play("Chai or Coffee","Chai");
play("Workout or Sleep","Workout"); 