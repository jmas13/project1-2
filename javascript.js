$(document).ready( function(){


// the whole component of setups.
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

// compare logic and gives cards or take cards
var compare = {
  playerOneCard: -1;
  playerTwoCard: -1;
  playerOneWar1: -1;
  playerOneWar2: -1;
  playerTwoWar1: -1;
  playerTwoWar2: -1;
  winner: [];
  pullACard: function(){
    playerOneCard=setUp.playerOneHand.pop();
    var oneURL="cards-svg/"+playerOneCard+".svg";
    $('#player1_hand').css({
      'background-image': 'url('+oneURL+')',
      'background-size': 'contain'
    });

    // $('#player1_hand').text(playerOneCard);
    playerTwoCard=setUp.playerTwoHand.pop();
    var twoURL="cards-svg/"+playerTwoCard+".svg";
    $('#player2_hand').css({
      'background-image': 'url('+twoURL+')',
      'background-size': 'contain'
    });

    // $('#player2_hand').text(playerTwoCard);
    console.log( setUp.playerOneHand );
    console.log(setUp.playerTwoHand);
    if(parseInt(playerOneCard)>parseInt(playerTwoCard)){
      $('#result').text("Player One Wins!");
      setUp.playerOneHand.unshift(playerOneCard);
      setUp.playerOneHand.unshift(playerTwoCard);

    }
    if(parseInt(playerOneCard)<parseInt(playerTwoCard)){
      $('#result').text("Player Two Wins!");
      setUp.playerTwoHand.unshift(playerOneCard);
      setUp.playerTwoHand.unshift(playerTwoCard);
    }
    // when the card values are tie, and either side has more than 2 cards in thier decks
    else if(setUp.playerOneHand.length>3 && setUp.playerTwoHand.length>3){
      $('#result').text("WAAAAAAAAAR!");
      playerOneWar1=setUp.playerOneHand.pop();
      // assign to html tag to display a card
      playerOneWar2=setUp.playerOneHand.pop();
      // assign to html tag to display a card
      playerTwoWar1=setUp.playerTwoHand.pop();
      // assign to html tag to display a card
      playerTwoWar2=setUp.playerTwoHand.pop();
      // assign to html tag to display a card
      }
      // when either side has less than 2 cards in their deck.
    else if(setUp.playerOneHand.length<2){
        $('#result').text("Player One Lost");
      }
    else if (setUp.playerTwoHand.length<2) {
        $('#result').text("Player Two Lost");
      }

// function closing
    }
//var compare closing
}


// when a player clicks start button, the system creates two decks for two players
$('#start_button').on("click", function(){setUp.createCards(); setUp.shuffle();
  setUp.splitTwo(); $('#start_button').css("display", "none")});
// when a player clicks 'next round' button, it will pull a card from players decks
// and compare values and assign to the winner
$('#next_round').on("click", function(){compare.pullACard();})
console.log(setUp.playerOneHand);
console.log(setUp.playerTwoHand);
// display number of cards players have
$("#player1_deck").hover(function(){
  $("#player1_deck").text(setUp.playerOneHand.length);
})
$("#player2_deck").hover(function(){
  $("#player2_deck").text(setUp.playerTwoHand.length);
})

})



// Work on the tie logic
// if the values of the cards are tie, pull a card two times more
// use Math.max() to return the biggest value and w/e has the biggest value Wins
// all the cards
// if a player does not have 2 more cards to display, the other player wins auto
