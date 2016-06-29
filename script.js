$('document').ready(function() {

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var inventoryArray = [{bananas: 0}, {apples: 0}, {oranges: 0}, {grapes: 0}];

var commoditiesArray =[{bananas: 2.50}, {apples: 3.25}, {oranges: 5.00}, {grapes: 7.76}]

var totalCash = 100;


var appleTotalSpent = 0;

var appleAvg = 0;

var bananaTotalSpent = 0;

var bananaAvg = 0;

$('#apples').on('click', function() {
	if (totalCash >= commoditiesArray[1].apples) {
	inventoryArray[1].apples += 1;
	appleTotalSpent += commoditiesArray[1].apples;
	totalCash -= commoditiesArray[1].apples;
	$('#wallet').empty();
	$('#wallet').append(totalCash);
	$('#appleQ').empty();
	$('#appleQ').append(inventoryArray[1].apples);
} else {
	alert('You don\'t have enough money!');
}
	appleAvg = appleTotalSpent / inventoryArray[1].apples;
	$('#appleP').empty();
	$('#appleP').append(appleAvg);
	$('#applesPrice').empty();
	$('#applesPrice').append(commoditiesArray[1].apples);
});

$('#bananas').on('click', function() {
	if (totalCash >= commoditiesArray[0].bananas) {
	inventoryArray[0].bananas += 1;
	bananaTotalSpent += commoditiesArray[0].bananas;
	totalCash -= commoditiesArray[0].bananas;
	$('#wallet').empty();
	$('#wallet').append(totalCash);
	$('#bananaQ').empty();
	$('#bananaQ').append(inventoryArray[0].bananas);
} else {
	alert('You don\'t have enough money!');
}
	bananaAvg = bananaTotalSpent / inventoryArray[0].bananas;
	$('#bananaP').empty();
	$('#bananaP').append(bananaAvg);
	$('#bananasPrice').empty();
	$('#bananasPrice').append(commoditiesArray[0].bananas);
});


});
