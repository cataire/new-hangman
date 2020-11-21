$(function() {

var wordList = ["book", "journal", "squirrel", "money", "table", "crystal"];

var currentWord = "";
var underScores = [];
var currentUserLetter = "";
var currentWordArray = [];
var usedLetters = [];
var userWins = 0;
var userLosses = 0;
var attempts = 0;



	function chooseWord() {

		currentWord = wordList[Math.floor(Math.random() * wordList.length)];
		console.log(currentWord);
		currentWordArray = currentWord.split('');
		console.log(currentWordArray);

		currentWordArray.forEach(function(){
			underScores.push(" _ ");		

		});

		console.log(underScores);

		$("#word").html(underScores);
		

	}

	chooseWord();

	function play(){


		$("#word").empty();
		$(".used-letters").empty();
		underScores = [];
		usedLetters = [];

		chooseWord();

		
	};


	function attemptsUpdate(){

		

	};

		$(".play-btn").click(function(){
			play();
		});

		$("html").keyup(function(event){
			$("#user-guess").html(event.key);
			currentUserLetter = event.key.toLowerCase();

			usedLetters.push(event.key);
			$(".used-letters").html(usedLetters);

			for (var i = 0; i < currentWordArray.length; i++) {



				if (currentUserLetter === currentWordArray[i]) {
					underScores[i] = event.key;
					console.log(underScores);
					$("#word").html(underScores);
					

				}
			}

		});
	

});

//ATTEmpts
//correct letters (no spaces etc)
//wins/losses
//lowercase