$(document).ready(function() {

	function initialScreen() {
		startScreen = "<div class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></div>";
		$('.MainArea').html(startScreen);
	}

	initialScreen();

	function timerWrapper() {
		theClock = setTimeout(thirtySeconds, 1000);
		function thirtySeconds() {
			if (counter === 0) {
				clearInterval(theClock);
				gameLossDueToTimeOut();
			}

			if (counter > 0) {
				counter--;
			}
			$(".timer").html(counter);
		};
	};	

	function wait() {
	if (questionCounter < 4) {
	questionCounter++;
	rungame();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

	function gameLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</div>";
	$(".MainArea").html(gameHTML);
	setTimeout(wait, 3000);
	}

	function gameWin() {
		correctTally++;
		gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</div>";
		$(".MainArea").html(gameHTML);
		setTimeout(wait,3000);
	}

	function gameLoss() {
		incorrectTally++;
		gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</div>";
		$(".MainArea").html(gameHTML);
		setTimeout(wait, 3000); 
	}

		$('body').on('click' ,'.start-button', function(event){
			rungame();

		});

		$('body').on('click', '.answer', function(event){
			userChoice = $(this).text();
			if(userChoice === correctAnswers[questionCounter]) {
				clearInterval(theClock);
				gameWin();
			}
			else {
				clearInterval(theClock);
				gameLoss();
			}
		});

		$('body').on('click', '.reset-button', function(event){
			resetGame();
		});

	});

		function rungame() {
			gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>30</div></div><div class='text-center'>" + questionArray[questionCounter] + "</div><div class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</div><div class='answer'>B. "+answerArray[questionCounter][1]+"</div><div class='answer'>C. "+answerArray[questionCounter][2]+"</div><div class='answer'>D. "+answerArray[questionCounter][3]+"</div>";
			$(".MainArea").html(gameHTML);
		}


		function finalScreen() {
			gameHTML = "<div class='text-center timer-div'>Time Remaining: <div class='timer'>" + counter + "</div></div>" + "<div class='text-center'>All done, here's how you did!" + "</div>" + "<div class='summary-correct'>Correct Answers: " + correctTally + "</div>" + "<div>Wrong Answers: " + incorrectTally + "</div>" + "<div>Unanswered: " + unansweredTally + "</div>" + "<div class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></div>";
			$(".MainArea").html(gameHTML);
		}

		function resetGame() {
			questionCounter = 0;
			correctTally = 0;
			incorrectTally = 0;
			unansweredTally = 0;
			counter = 30;
			rungame();
			timerWrapper();
		}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What are the two main characters of Adventure Time?", "What is the name of Jake's girlfriend?", "What show is the character Gazpacho on?", "What is the name of Dexter's sister?", "What is the capital of China?"];
var answerArray = [["Finn & Jake", "Timmy & Vicky", "Kenan & Kel", "Spongebob & Patrick"], ["Jackie","Lady Rainicorn","Princess Bubblegum","None of These."], ["Samurai Jack", "Johnny Bravo", "Chowder", "Camp Lazlo"], ["Mee Mee","Lee Lee","Dee Dee","Jill"]];
var correctAnswers = ["A. Finn & Jake", "B. Lady Rainicorn", "C. Chowder", "C. Dee Dee"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;	