$('document').ready(function() {

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

var inventoryArray = [{bananas: 0}, {apples: 0}, {oranges: 0}, {grapes: 0}];

var commoditiesArray =[{fruit: 'bananas', price: 2.50}, {fruit: 'apples', price: 3.25}, {fruit: 'oranges', price: 5.00}, {fruit: 'grapes', price: 7.76}]

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
})

function priceChange(fruits){
	for (i = 0; i < fruits.length; i++){
	fruits[i].price  += (randomNumber(-50, 50)/100);

		console.log((fruits[i].price).toFixed(2));
	}
}

setInterval(function(){ priceChange(commoditiesArray); }, 4000);




});
