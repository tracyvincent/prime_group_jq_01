$('document').ready(function() {

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

var inventoryArray = [{bananas: 0}, {apples: 0}, {oranges: 0}, {grapes: 0}];

var commoditiesArray =[{fruit: 'bananas', price: 2.50}, {fruit: 'apples', price: 3.25}, {fruit: 'oranges', price: 5.00}, {fruit: 'grapes', price: 7.76}];

var totalCash = 100;

var appleTotalSpent = 0;
var appleAvg = 0;

var bananaTotalSpent = 0;
var bananaAvg = 0;

var orangeTotalSpent = 0;
var orangeAvg = 0;

var grapeTotalSpent = 0;
var grapeAvg = 0;

function priceChange(fruits){
	for (i = 0; i < fruits.length; i++){
	fruits[i].price  += (randomNumber(-50, 50)/100);

	if (fruits[i].price < .50) {
		fruits[i].price = .50;
	} else if (fruits[i].price > 9.99) {
		fruits[i].price = 9.99
	} else {
		fruits[i].price = fruits[i].price;
	}


	console.log((fruits[i].price).toFixed(2));
	$('#applesPrice').empty();
	$('#applesPrice').append(commoditiesArray[1].price.toFixed(2));
	$('#bananasPrice').empty();
	$('#bananasPrice').append(commoditiesArray[0].price.toFixed(2));
	$('#orangesPrice').empty();
	$('#orangesPrice').append(commoditiesArray[2].price.toFixed(2));
	$('#grapesPrice').empty();
	$('#grapesPrice').append(commoditiesArray[3].price.toFixed(2));
	}
	return(fruits);

};
setInterval(function(){ priceChange(commoditiesArray); }, 15000);

$('#apples').on('click', function() {
	if (totalCash >= commoditiesArray[1].price) {
		inventoryArray[1].apples+= 1;
		appleTotalSpent += commoditiesArray[1].price;
		totalCash -= commoditiesArray[1].price;
		$('#wallet').empty();
		$('#wallet').append(totalCash.toFixed(2));
		$('#appleQ').empty();
		$('#appleQ').append(inventoryArray[1].apples);
} else {
	alert('You don\'t have enough money!');
}
	appleAvg = appleTotalSpent / inventoryArray[1].apples;
	$('#appleP').empty();
	$('#appleP').append(appleAvg.toFixed(2));

	});


$('#bananas').on('click', function() {
	if (totalCash >= commoditiesArray[0].price) {
		inventoryArray[0].bananas += 1;
		bananaTotalSpent += commoditiesArray[0].price;
		totalCash -= commoditiesArray[0].price;
		$('#wallet').empty();
		$('#wallet').append(totalCash.toFixed(2));
		$('#bananaQ').empty();
		$('#bananaQ').append(inventoryArray[0].bananas);
} else {
	alert('You don\'t have enough money!');
}
	bananaAvg = bananaTotalSpent / inventoryArray[0].bananas;
	$('#bananaP').empty();
	$('#bananaP').append(bananaAvg.toFixed(2));

	});


$('#oranges').on('click', function() {
	if (totalCash >= commoditiesArray[2].price) {
		inventoryArray[2].oranges += 1;
		orangeTotalSpent += commoditiesArray[2].price;
		totalCash -= commoditiesArray[2].price;
		$('#wallet').empty();
		$('#wallet').append(totalCash.toFixed(2));
		$('#orangeQ').empty();
		$('#orangeQ').append(inventoryArray[2].oranges);
	} else {
		alert('You don\'t have enough money!');
	}
		orangeAvg = orangeTotalSpent / inventoryArray[2].oranges;
		$('#orangeP').empty();
		$('#orangeP').append(orangeAvg.toFixed(2));

	});

$('#grapes').on('click', function() {
	if (totalCash >= commoditiesArray[3].price) {
	inventoryArray[3].grapes += 1;
	grapeTotalSpent += commoditiesArray[3].price;
	totalCash -= commoditiesArray[3].price;
	$('#wallet').empty();
	$('#wallet').append(totalCash.toFixed(2));
	$('#grapeQ').empty();
	$('#grapeQ').append(inventoryArray[3].grapes);
} else {
	alert('You don\'t have enough money!');
}
	grapeAvg = grapeTotalSpent / inventoryArray[3].grapes;
	$('#grapeP').empty();
	$('#grapeP').append(grapeAvg.toFixed(2));

	});
});
