






//question1
//get all prices
var allPrices = items.map( function (item) {
  return item.price;
});
//get the sum
var sum = allPrices.reduce( function (previous, current) {
  return previous + current;
});
//average
var average = sum / allPrices.length;

var answer = average.toFixed(2);

document.querySelector('#answer1').textContent = "The average price is $" + answer;
