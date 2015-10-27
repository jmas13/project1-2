$(document).ready( function(){



// After checking the running status, make the program much more readable by creating
// reader friendly






setUp={
  cards: [],
  playerOneHand: [],
  playerTwoHand: [],
  // create 52 cards
  createCards: function(){
    var suits=['H', 'D', 'C', 'S'];
    for (var i=1; i<14; i++){
      for (var j=0; j<4; j++){
        this.cards.push(i+suits[j]);
      }
    }

  },
  // shuffles the deck of 52 cards
  shuffle: function(){

      var cardArray=this.cards;
      var currentIndex = cardArray.length;
        var tempValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            tempValue = cardArray[currentIndex];
            cardArray[currentIndex] = cardArray[randomIndex];
            cardArray[randomIndex] = tempValue;
        }

    },
  // give two players 26 cards each
  splitTwo: function(){
      this.playerOneHand=this.cards.splice(0,26);
      this.playerTwoHand=this.cards;


  }


  }

var compare = {
  pullACard: function(){
    var playerOneCard=setUp.playerOneHand.pop();
    var playerTwoCard=setUp.playerTwoHand.pop();
    console.log( setUp.playerOneHand );
    console.log(setUp.playerTwoHand);
    if(parseInt(playerOneCard)>=parseInt(playerTwoCard)){
      console.log("player one wins");
      setUp.playerOneHand.unshift(playerOneCard);
      setUp.playerOneHand.unshift(playerTwoCard);

    }
    if(parseInt(playerOneCard)<parseInt(playerTwoCard)){
      console.log("player two wins");
      setUp.playerTwoHand.unshift(playerOneCard);
      setUp.playerTwoHand.unshift(playerTwoCard);

    }
  }
}

setUp.createCards();
setUp.shuffle();
setUp.splitTwo();
console.log(setUp.playerOneHand);
console.log(setUp.playerTwoHand);
compare.pullACard();



})
