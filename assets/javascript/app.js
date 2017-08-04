$(document).ready(function() {

	function initialScreen() {
		startScreen = "<div class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></div>";
		$('.MainArea').html(startScreen);
}

	initialScreen();

		function wait() {
		if (questionCounter < 3) {
			questionCounter++;
			rungame();
			}
	else {
		finalScreen();
			}
		}
	

	function gameLossDueToTimeOut() {
	unansweredTally++;
	indexHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + timeLeft + "</div></div>" + "<div class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</div>";
	$(".MainArea").html(indexHTML);
	clearInterval(theTimer);
	setInterval(thirtySeconds,)
	}

	function gameWin() {
		correctTally++;
		indexHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + timeLeft + "</div></div>" + "<div class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</div>";
		$(".MainArea").html(indexHTML);
		setInterval(wait,2000);
		clearInterval(theTimer);
	}

	function gameLoss() {
		incorrectTally++;
		indexHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + timeLeft + "</div></div>" + "<div class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</div>";
		$(".MainArea").html(indexHTML);
		setInterval(wait,2000); 
		clearInterval(theTimer);
	}

		$('body').on('click' ,'.start-button', function(event){
			rungame();

		});

		$('body').on('click', '.answer', function(event){
			userChoice = $(this).text();
			if(userChoice === correctAnswers[questionCounter]) {
				gameWin();
			}
			else {
				gameLoss();
			}
		});

		$('body').on('click', '.reset-button', function(event){
			resetGame();
		});

	});


function thirtySeconds(){
		var theTimer = setInterval(function() {
			timeLeft = timeLeft -1;
			if (timeLeft = 0) {
				clearInterval(theTimer);
				gameLossDueToTimeOut();
				$('.timer').html(theTimer);
			}
		}, 1000);
	}

		function finalScreen() {
			indexHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + timeLeft + "</div></div>" + "<div class='text-center'>All done, here's how you did!" + "</div>" + "<div class='summary-correct'>Correct Answers: " + correctTally + "</div>" + "<div class='Wrong-Answers'>Wrong Answers: " + incorrectTally + "</div>" + "<div class='Unanswered'>Unanswered: " + unansweredTally + "</div>" + "<div class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></div>";
			$(".MainArea").html(indexHTML);
		}

		function resetGame() {
			questionCounter = 0;
			correctTally = 0;
			incorrectTally = 0;
			unansweredTally = 0;
			timeLeft = 30;
			rungame();
			clearInterval(theTimer);
		}

	function rungame() {
				indexHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + timeLeft + "</div></div><div class='text-center'>" + questionArray[questionCounter] + "</div><div class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</div><div class='answer'>B. "+answerArray[questionCounter][1]+"</div><div class='answer'>C. "+answerArray[questionCounter][2]+"</div><div class='answer'>D. "+answerArray[questionCounter][3]+"</div>";
				$(".MainArea").html(indexHTML);
				thirtySeconds();
					
			}

var timeLeft = 30;	
var startScreen;
var indexHTML;
var questionArray = ["Who are the two main characters of Adventure Time?", "What is the name of Jake's girlfriend?", "What show is the character Gazpacho on?", "What is the name of Dexter's sister?"];
var answerArray = [["Finn & Jake", "Timmy & Vicky", "Kenan & Kel", "Spongebob & Patrick"], ["Jackie","Lady Rainicorn","Princess Bubblegum","None of These."], ["Samurai Jack", "Johnny Bravo", "Chowder", "Camp Lazlo"], ["Mee Mee","Lee Lee","Dee Dee","Jill"]];
var correctAnswers = ["A. Finn & Jake", "B. Lady Rainicorn", "C. Chowder", "C. Dee Dee"];
var questionCounter = 0;
var selecterAnswer;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;	