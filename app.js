//Create blank array to store used numbers
let usedNums = [];

//Create a loop to input each square number into the main function
function newCard() {
		for(let i=0; i < 24; i++) {
		setSquare(i);
	}
}

//Main function
function setSquare(thisSquare) {
	let currSquare = "square"+thisSquare;
	let newNum;
	
//Returns 5 random numbers between 1-75, 16-90, 31-105, 46-120, 61-135. Why? Remove
	let colPlace =[0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4];
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 75);
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}
