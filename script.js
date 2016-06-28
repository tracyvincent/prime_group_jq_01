$('document').ready(function() {

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var inventoryArray = [{bananas: 0}, {apples: 0}, {oranges: 0}, {grapes: 0}];

var commoditiesArray =[{bananas: 2.50}, {apples: 3.25}, {oranges: 5.00}, {grapes: 7.76}]

var totalCash = 100;

var appleTotalSpent = 0;

var appleAvg = 0;

$('#apples').on('click', function() {
	if (totalCash >= commoditiesArray[1].apples) {
	inventoryArray[1].apples += 1;
	appleTotalSpent += commoditiesArray[1].apples;
	totalCash -= commoditiesArray[1].apples;
} else {
	alert('You don\'t have enough money!');
}

	appleAvg = appleTotalSpent / inventoryArray[1].apples;
}


});
