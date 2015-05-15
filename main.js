

//var answer1 = document.querySelector('#answer1');
//answer1.innerText= '';
//items.forEach(function (item) {
 //answer1.appendChild(document.createTextNode(item.price +
//  '\n'));
//});



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
//2
var newItems = items.filter(function(item){
return (item.price > 14 && item.price <18);
});


var answer2 =document.querySelector('#answer2');
  answer2.innerText= '';
  newItems.forEach(function (item) {
  answer2.appendChild(document.createTextNode(item.title +
    '\n'));
  });

//3
var currCode = items.filter(function(ccode){
  return(ccode.currency_code === "GBP");
});

var answer3 =document.querySelector('#answer3');
  answer3.innerText= '';
  currCode.forEach(function (item) {
  answer3.appendChild(document.createTextNode(item.title +
    ' costs \u00A3' + item.price));
});

  //4
var listWo = items.filter(function(dwoo){
  if(dwoo.materials.indexOf("wood") !== -1)
  return dwoo.materials;
});

var answer4 =document.querySelector('#answer4');

answer4.innerText= '';
listWo.forEach(function (item) {
answer4.appendChild(document.createTextNode(item.title +
  ' is made of wood' + '\n'));
});

//5
var emore = items.filter(function(eightm) {

  if(eightm.materials.length >7){
   return eightm.materials;
} else;
{ null;}
});

var answer5 =document.querySelector('#answer5');

answer5.innerText= '';
emore.forEach(function (item) {
  var material = item.materials
  var title = item.title;
answer5.appendChild(document.createTextNode(item.title + ' has ' +
 item.materials.length + ' materials ' + '\n'));
  material.forEach(function(item){
    answer5.appendChild(document.createTextNode(item + '\n\n'));
  });

});


//6

var sellers = items.filter(function(item) {
  return (item.who_made === "i_did");

});

var answer6 =document.querySelector('#answer6');
  answer6.innerText= '';

  answer6.appendChild(document.createTextNode(sellers.length +
    ' were made by their sellers'));




