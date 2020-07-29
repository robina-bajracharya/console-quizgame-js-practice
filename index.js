(function(){
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
	Question.prototype.checkAnswer = function(){
		if (userAnswer == this.correctAnswer){
			console.log("Your answer is correct!");
		}else{
			console.log("Your answer is incorrect!");
		}
	}
	var ques1 = new Question("Is javascript the coolest programming language?",['yes','no'],0);
	var ques2 = new Question("What is the name of the teacher?",['jonas','john'],0);

	var questions = [];
	questions.push(ques1);
	questions.push(ques2);
	var random = Math.floor(Math.random()*questions.length);
	questions[random].displayQuestions();
	var userAnswer = prompt("Enter your answer in numbers:");
	questions[random].checkAnswer();
})();