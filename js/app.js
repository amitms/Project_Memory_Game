/*
 * Create a list that holds all of your cards
 */ 
cardList = ["fa fa-bolt","fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-cube","fa fa-leaf","fa fa-bicycle","fa fa-bomb",
			"fa fa-bolt","fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-cube","fa fa-leaf","fa fa-bicycle","fa fa-bomb"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function cardListAssign() {
	cardList = shuffle(cardList);	
	var k=document.querySelectorAll('.deck li');
	for(let s = 0; s < k.length; s++){
		k[s].className == k[s].setAttribute("Class", "card"); 
		// console.log(s); card match
		}
	var x=document.querySelectorAll('.deck i');
	for(let j = 0; j < x.length; j++){
		x[j].className === x[j].setAttribute("Class", cardList[j]); 
		}
return x;
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
//cardListAssign();

const deck = document.querySelector(".deck");
let opened = [];
let matched = [];


deck.addEventListener("click", function(evt) {
	if (evt.target.nodeName === "LI") {
		console.log(evt.target.nodeName + " Was clicked");
				flipCard();
				
	function flipCard() {
		evt.target.classList.add("match");	
		addToOpened();
	}
	function addToOpened() {
		//add to opened array for two opened cards
		if (opened.length === 0 || opened.length === 1) {
			// Push that img to opened array
			opened.push(evt.target.firstElementChild);
		}
		console.log(opened);
		compareTwo();
	}
}
});

function compareTwo() {
	if (opened.length === 2) {
  		// Disable any further mouse clicks on other cards
  		document.body.style.pointerEvents = "none";
  	}
	// Compare the two item contnts
	if (opened.length === 2 && opened[0].className === opened[1].className) {
		// If matched call match()
		match();
		console.log("It's a Match!");
	} else if (opened.length === 2 && opened[0].className != opened[1].className) {
		// If No match call noMatch()
		noMatch();
		 console.log("NO Match!");
	}
}

function match() {
	/* acess two cards in opened and set as opened cards and enable pointers
	*/
	setTimeout(function() {
		opened[0].parentElement.classList.remove("match");
		opened[1].parentElement.classList.remove("match");
		opened[0].parentElement.classList.add("open");
		opened[1].parentElement.classList.add("open");
		opened[0].parentElement.classList.add("show");
		opened[1].parentElement.classList.add("show");

		matched.push(...opened);
		// Allow for further mouse clicks on cards
		document.body.style.pointerEvents = "auto";
		// Check to see if the game has been won with all 8 pairs
		winGame();
		// Clear the opened array
		opened = [];
	}, 600);
	// Call movesCounter to increment by one
	//movesCounter();
	//starRating();
}

function noMatch() {
	/* keep open cards fro 800 ms and then hide cardss*/
	setTimeout(function() {
		opened[0].parentElement.classList.remove("match");
		opened[1].parentElement.classList.remove("match");
		// Allow further mouse clicks on cards
		document.body.style.pointerEvents = "auto";
		// Remove the cards from opened array
		opened = [];
	}, 800);
}




//*reset	 
	var l=document.querySelector('.restart');
	l == l.addEventListener("click", function(){ 
			cardListAssign();
			});				
  



