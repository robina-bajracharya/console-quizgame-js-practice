(function(){
	var random,userAnswer;
	var Question = function(question,answers,correctAnswer){
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
	}

	Question.prototype.displayQuestions = function(){
		console.log(this.question);
		console.log('0 '+this.answers[0]);
		console.log('1 '+this.answers[1]);
	}
	Question.prototype.checkAnswer = function(keepScore){
		var sc;
		if (userAnswer == this.correctAnswer){

			console.log("Your answer is correct!");
			sc =keepScore(true);
		}else{
			console.log("Your answer is incorrect!");
			sc = keepScore(false);
		}
		this.displayScore(sc);
	}
	Question.prototype.displayScore = function(sc){
		console.log("Your final Score is : "+sc);

	}
	var ques1 = new Question("Is javascript the coolest programming language?",['yes','no'],0);
	var ques2 = new Question("What is the name of the teacher?",['jonas','john'],0);

	var questions = [];
	questions.push(ques1);
	questions.push(ques2);
	function scoreCalculation(){
		var score = 0;
		return function(correct){
			if (correct){
			score++;
		}
		return score;
		}
	}
	var keepScore = scoreCalculation();
	function nextQuestion(){
	random = Math.floor(Math.random()*questions.length);
	questions[random].displayQuestions();
	userAnswer = prompt("Enter your answer in numbers:");
	
	if (userAnswer !== 'exit'){
		questions[random].checkAnswer(keepScore);
		nextQuestion();

	}
	
	}
	
	nextQuestion();
})();