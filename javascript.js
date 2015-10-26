$(document).ready( function(){



// After checking the running status, make the program much more readable by creating
// reader friendly


// created 52cards
  var suits=['H', 'D', 'C', 'S'];
  var cards=[];
    for (var i=1; i<14; i++){
      for (var j=0; j<4; j++){
        cards.push(i+suits[j]);
      }
    }

console.log(cards);

// create a shuffle function
function shuffle(){
  var cardArray=cards.slice();
  var currentIndex = cardArray.length;
    var tempValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = tempValue;
    }
  return cardArray;
}

console.log(shuffle());

// splits the deck into two players hands
function splitTwo(deck){
  var playerOneHand=deck.splice(0,26);
  var playerTwoHand=deck;

}

console.log(splitTwo(shuffle()));




})
