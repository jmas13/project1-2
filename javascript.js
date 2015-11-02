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
  playerOneShowed:[],
  playerTwoShowed: [],
  pullACard: function(){
    // resets previously showed cards in memory
    this.playerOneShowed.length=0;  //jsm: what do you mean by reset in memory?
    this.playerTwoShowed.length=0;
    // resets previously showed war cards
    $('#player2_war1').css('background-image', 'none');
    $('#player2_war2').css('background-image', 'none');
    $('#player1_war1').css('background-image', 'none');
    $('#player1_war2').css('background-image', 'none');


    var playerOneCard=setUp.playerOneHand.pop();
    var oneURL="css/cards-svg/"+playerOneCard+".svg";
    $('#player1_hand').css({
      'background-image': 'url('+oneURL+')',
      'background-size': 'contain'
    });
    this.playerOneShowed.push(playerOneCard);
    console.log(this.playerOneShowed);
    var playerTwoCard=setUp.playerTwoHand.pop();
    var twoURL="css/cards-svg/"+playerTwoCard+".svg";
    $('#player2_hand').css({
      'background-image': 'url('+twoURL+')',
      'background-size': 'contain'
    });
    this.playerTwoShowed.push(playerTwoCard);
    console.log(this.playerTwoShowed);
  // compare the cards drawn
  this.showDown();
  },

  showDown: function(){
    if(parseInt(this.playerOneShowed[0])>parseInt(this.playerTwoShowed[0])){
      $('#result').text("Player One Wins!");
      setUp.playerOneHand.unshift(this.playerOneShowed[0]);
      setUp.playerOneHand.unshift(this.playerTwoShowed[0]);

    }
    if(parseInt(this.playerOneShowed[0])<parseInt(this.playerTwoShowed[0])){
      $('#result').text("Player Two Wins!");
      setUp.playerTwoHand.unshift(this.playerOneShowed[0]);
      setUp.playerTwoHand.unshift(this.playerTwoShowed[0]);
    }
    // when the card values are tie, and either side has more than 2 cards in thier decks
    if((setUp.playerOneHand.length>2||setUp.playerTwoHand.length>2)&&(parseInt(this.playerOneShowed[0])==parseInt(this.playerTwoShowed[0]))){
      // setInterval(function(){$('#sparta').css("display", "block")}, 5000);
      // $('#sparta').css("  background-image", 'url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Cleomenes_War_detail_1.svg/2000px-Cleomenes_War_detail_1.svg.png');
      // 1. pull wards
      this.pullWarCards();
      // 2. compare warcards
      this.warShowDown();
    }
      // when either side has less than 2 cards in their deck.
    else if(setUp.playerOneHand.length<2){
        $('#result').text("Player One Lost");
      }
    else if (setUp.playerTwoHand.length<2) {
        $('#result').text("Player Two Lost");
      }
    },

    pullWarCards: function(){
    // player1 pulling war cards
      var playerOneWar1=setUp.playerOneHand.pop();
      var tempURL="css/cards-svg/"+playerOneWar1+".svg";
      $('#player1_war1').css({
        'background-image': 'url('+tempURL+')',
        'background-size': 'contain'
      });
      this.playerOneShowed.push(playerOneWar1);

      var playerOneWar2=setUp.playerOneHand.pop();
      var temp2URL="css/cards-svg/"+playerOneWar2+".svg";
      $('#player1_war2').css({
        'background-image': 'url('+temp2URL+')',
        'background-size': 'contain'
      });
      this.playerOneShowed.push(playerOneWar2);
      console.log(this.playerOneShowed);
    // player2 pulling war cards
      var playerTwoWar1=setUp.playerTwoHand.pop();
      var tempURL2="css/cards-svg/"+playerTwoWar1+".svg";
      $('#player2_war1').css({
        'background-image': 'url('+tempURL2+')',
        'background-size': 'contain'
      });
      this.playerTwoShowed.push(playerTwoWar1);

      var playerTwoWar2=setUp.playerTwoHand.pop();
      var temp2URL2="css/cards-svg/"+playerTwoWar2+".svg";
      $('#player2_war2').css({
        'background-image': 'url('+temp2URL2+')',
        'background-size': 'contain'
      });
      this.playerTwoShowed.push(playerTwoWar2);
      console.log(this.playerTwoShowed);
    },

    warShowDown: function(){
      for(var i=2; i>0; i--){
          if(parseInt(this.playerOneShowed[i])>parseInt(this.playerTwoShowed[i])){
            $('#result').text("Player One Won!");
            for(var v=0; v<3; v++){
              setUp.playerOneHand.unshift(this.playerOneShowed[v]);
              setUp.playerOneHand.unshift(this.playerTwoShowed[v]);
            }
            break;
          }
          if(parseInt(this.playerOneShowed[i])<parseInt(this.playerTwoShowed[i])){
            $('#result').text("Player Two Won!");
            for(var v=0;v<3; v++){
              setUp.playerTwoHand.unshift(this.playerOneShowed[v]);
              setUp.playerTwoHand.unshift(this.playerTwoShowed[v]);
            }
            break;
          }
          else if(parseInt(this.playerOneShowed[0])=parseInt(this.playerTwoShowed[0])){ //jsm: Is this meant to be checking equality?
            $('#result').text("Player One Won!");
            for(var v=0; v<3; v++){
              setUp.playerOneHand.unshift(this.playerOneShowed[v]);
              setUp.playerOneHand.unshift(this.playerTwoShowed[v]);
            }

            break;

          }
        }
      }


//var compare closing // jsm: be sure to remove commented out code
}


// when a player clicks start button, the system creates two decks for two players
$('#start_button').on("click", function(){setUp.createCards(); setUp.shuffle(); // jsm: could the attachment of all of these listeners happen inside a method of setUp?
  setUp.splitTwo(); $('#start_button').css("display", "none")});
// when a player clicks 'next round' button, it will pull a card from players decks
// and compare values and assign to the winner
$('#next_round').on("click", function(){compare.pullACard();})
// display number of cards players have
$("#player1_deck").hover(function(){
  $("#player1").text(setUp.playerOneHand.length);
})
$("#player2_deck").hover(function(){
  $("#player2").text(setUp.playerTwoHand.length);
})

})



// Work on the tie logic
// if the values of the cards are tie, pull a card two times more
// use Math.max() to return the biggest value and w/e has the biggest value Wins
// all the cards
// if a player does not have 2 more cards to display, the other player wins auto
