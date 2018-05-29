
	time = setInterval(function() {
		seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
	}, 1000);
}

function stopTime() {
	clearInterval(time);
}

playAgain.addEventListener('click',function() {
	modal.style.display = "none";
	cardListAssign();
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
});

//*reset	 
var l=document.querySelector('.restart');
l == l.addEventListener("click", function(){ 
	cardListAssign();
	});				
  



