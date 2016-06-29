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

var orangeTotalSpent = 0;
var orangeAvg = 0;

var grapeTotalSpent = 0;
var grapeAvg = 0;

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

$('#oranges').on('click', function() {
	if (totalCash >= commoditiesArray[2].oranges) {
	inventoryArray[2].oranges += 1;
	orangeTotalSpent += commoditiesArray[2].oranges;
	totalCash -= commoditiesArray[2].oranges;
	$('#wallet').empty();
	$('#wallet').append(totalCash);
	$('#orangeQ').empty();
	$('#orangeQ').append(inventoryArray[2].oranges);
} else {
	alert('You don\'t have enough money!');
}
	orangeAvg = orangeTotalSpent / inventoryArray[2].oranges;
	$('#orangeP').empty();
	$('#orangeP').append(orangeAvg);
	$('#orangesPrice').empty();
	$('#orangesPrice').append(commoditiesArray[2].oranges);
});

$('#grapes').on('click', function() {
	if (totalCash >= commoditiesArray[3].grapes) {
	inventoryArray[3].grapes += 1;
	grapeTotalSpent += commoditiesArray[3].grapes;
	totalCash -= commoditiesArray[3].grapes;
	$('#wallet').empty();
	$('#wallet').append(totalCash);
	$('#grapeQ').empty();
	$('#grapeQ').append(inventoryArray[3].grapes);
} else {
	alert('You don\'t have enough money!');
}
	grapeAvg = grapeTotalSpent / inventoryArray[3].grapes;
	$('#grapeP').empty();
	$('#grapeP').append(grapeAvg);
	$('#grapesPrice').empty();
	$('#grapesPrice').append(commoditiesArray[3].grapes);
});


});
