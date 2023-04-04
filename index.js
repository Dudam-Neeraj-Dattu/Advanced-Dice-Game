//function to start 
function oneplayermode() {
  alert("One Player Mode Activated");
  var player1, player2, turn = 1;
  var player1points = 0, player2points = 0;  
  function startgame() {
    player1 = prompt("Enter player name : ");
    player2 = "Computer";
    document.querySelectorAll("p")[0].innerHTML = player1 + "'s Dice";
    document.querySelectorAll("p")[2].innerHTML = player2 + "'s Dice";
    document.getElementById("start").style.display = "none";
    document.getElementById("refresh").style.display = "inline";
    document.getElementById("end").style.display = "inline";
    document.getElementById("refresh").innerHTML = player1 + " ! click here to throw the dice";
    turn++;
  };

  function startnewgame() {
    window.location.reload();

  };

  function startagain() {
    document.querySelectorAll("p")[0].innerHTML = player1 + "'s Dice"; 
    document.querySelectorAll("p")[2].innerHTML = player2 + "'s Dice";
    document.querySelectorAll("p")[1].innerHTML = "Points : " + player1points;
    document.querySelectorAll("p")[3].innerHTML = "Points : " + player2points;
    document.getElementById("startnewgame").style.display = "none";
    document.getElementById("startagain").style.display = "none";
    document.getElementById("refresh").style.display = "inline";
    document.getElementById("end").style.display = "inline";
    document.querySelectorAll("h1")[1].innerHTML = "Results will be displayed here";
  }

  function throwdice() {

    var randonenumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randonenumber1 + ".png");
    var randonenumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randonenumber2 + ".png");
    if (randonenumber1 > randonenumber2) {
      document.querySelectorAll("h1")[1].innerHTML = "😎 " + player1 + " Won";
      document.querySelectorAll("p")[1].innerHTML = "Points : " + ++player1points;
    }
    else if (randonenumber1 < randonenumber2) {
      document.querySelectorAll("h1")[1].innerHTML = player2 + " Won 💻";
      document.querySelectorAll("p")[3].innerHTML = "Points : " + ++player2points;
    }
    else {
      document.querySelectorAll("h1")[1].innerHTML = "!! Draw !!";
    }

    if(turn % 2 === 1) {
      document.getElementById("refresh").innerHTML = player1 + " ! click here to throw the dice";      
      turn++;
    }
    else{
      document.getElementById("refresh").innerHTML = "It's computer's turn!!";      
      window.setTimeout(() => {
        document.getElementById("refresh").click();      
      }, 600);       
      turn++;
    }
  };

  //endgame to display final result.

  function endgame() {
    if(player1points > player2points) {
      document.querySelectorAll("h1")[1].innerHTML="😎 " + player1 + " Won the game by " + (player1points - player2points) + " points 😎";
    }
    else if(player1points < player2points) {
      document.querySelectorAll("h1")[1].innerHTML="💻 " + player2 + " Won the game by " + (player2points - player1points) + " points 💻";
    }
    else{
      document.querySelectorAll("h1")[1].innerHTML="Both players got equal points";
    }
    player1points = 0;
    player2points = 0;
    document.getElementById("end").style.display = "none";
    document.getElementById("refresh").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("startnewgame").style.display = "inline";
    document.getElementById("startagain").style.display = "inline";
  };

  //oneplayer mode initial display

  document.getElementById("start").style.display = "inline";
  document.getElementById("oneplayer").style.display = "none";
  document.getElementById("twoplayer").style.display = "none";  
  document.getElementById("end").style.display = "none";
  document.getElementById("refresh").style.display = "none";
  document.getElementById("startnewgame").style.display = "none";

  //oneplayer mode event listeners

  document.querySelector("button.start").addEventListener("click", startgame);
  document.querySelector("button.refresh").addEventListener("click", throwdice);
  document.querySelector("button.end").addEventListener("click", endgame);
  document.querySelector("button.startnewgame").addEventListener("click", startnewgame);  
  document.querySelector("button.startagain").addEventListener("click", startagain);  
};


function twoplayermode() {
  alert("Two Player Mode Activated");
  var player1, player2, turn = 1;
  var player1points = 0, player2points = 0;  

  //function to start initial game

  function startgame() {
    player1 = prompt("Enter player 1 name : "); //entering player 1
    player2 = prompt("Enter player 2 name : "); //entering player 2

    //changing player names display

    document.querySelectorAll("p")[0].innerHTML = player1 + "'s Dice"; 
    document.querySelectorAll("p")[2].innerHTML = player2 + "'s Dice";

    //hiding the start button and displaying the throw dice and end game button

    document.getElementById("start").style.display = "none";
    document.getElementById("refresh").style.display = "inline";
    document.getElementById("end").style.display = "inline";
    document.getElementById("refresh").innerHTML = player1 + " ! click here to throw the dice";
    turn++;
  };

  //function to start new game

  function startnewgame() {
    window.location.reload();    
  };

  function startagain() {
    document.querySelectorAll("p")[0].innerHTML = player1 + "'s Dice"; 
    document.querySelectorAll("p")[2].innerHTML = player2 + "'s Dice";
    document.querySelectorAll("p")[1].innerHTML = "Points : " + player1points;
    document.querySelectorAll("p")[3].innerHTML = "Points : " + player2points;
    document.getElementById("startnewgame").style.display = "none";
    document.getElementById("startagain").style.display = "none";
    document.getElementById("refresh").style.display = "inline";
    document.getElementById("end").style.display = "inline";
    document.querySelectorAll("h1")[1].innerHTML = "Results will be displayed here";
  }

  //function to do throw dice

  function throwdice() {

    var randonenumber1 = Math.floor(Math.random() * 6) + 1; //getting player 1 random number between 1 - 6    
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randonenumber1 + ".png"); //changing image to dice number
    var randonenumber2 = Math.floor(Math.random() * 6) + 1; //getting player 1 random number between 1 - 6    
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randonenumber2 + ".png"); //changing image to dice number

    //performing conditonal checks to display winner

    if (randonenumber1 > randonenumber2) {
      document.querySelectorAll("h1")[1].innerHTML = "😎 " + player1 + " Won";
      document.querySelectorAll("p")[1].innerHTML = "Points : " + ++player1points; //increment player 1 points 
    }
    else if (randonenumber1 < randonenumber2) {
      document.querySelectorAll("h1")[1].innerHTML = player2 + " Won 😎";
      document.querySelectorAll("p")[3].innerHTML = "Points : " + ++player2points; //increment player 2 points
    }
    else {
      document.querySelectorAll("h1")[1].innerHTML = "!! Draw !!"; //declaring draw
    };

    if(turn % 2 === 1) {
      document.getElementById("refresh").innerHTML = player1 + " ! click here to throw the dice";
      turn++;
    }
    else{
      document.getElementById("refresh").innerHTML = player2 + " ! click here to throw the dice";
      turn++;
    }
  };

  //endgame to display final result.

  function endgame() {

    //final display of results

    if(player1points > player2points) {
      document.querySelectorAll("h1")[1].innerHTML="😎 " + player1 + " Won the game by " + (player1points - player2points) + " points 😎";
    }
    else if(player1points < player2points) {
      document.querySelectorAll("h1")[1].innerHTML="😎 " + player2 + " Won the game by " + (player2points - player1points) + " points 😎";
    }
    else{
      document.querySelectorAll("h1")[1].innerHTML="Both players got equal points";
    }

    player1points = 0;
    player2points = 0;
    document.getElementById("end").style.display = "none";
    document.getElementById("refresh").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("startnewgame").style.display = "inline";
    document.getElementById("startagain").style.display = "inline";
  };

  //twoplayer mode initial display

  document.getElementById("start").style.display = "inline";
  document.getElementById("oneplayer").style.display = "none";
  document.getElementById("twoplayer").style.display = "none";  
  document.getElementById("end").style.display = "none";
  document.getElementById("refresh").style.display = "none";
  document.getElementById("startnewgame").style.display = "none";

  //twoplayer mode event listeners

  document.querySelector("button.start").addEventListener("click", startgame);
  document.querySelector("button.refresh").addEventListener("click", throwdice);
  document.querySelector("button.end").addEventListener("click", endgame);
  document.querySelector("button.startnewgame").addEventListener("click", startnewgame);  
  document.querySelector("button.startagain").addEventListener("click", startagain);  
};

//event listeners
document.querySelector("button.oneplayer").addEventListener("click", oneplayermode);
document.querySelector("button.twoplayer").addEventListener("click", twoplayermode);


//intial display screen

document.getElementById("start").style.display = "none";
document.getElementById("end").style.display = "none";
document.getElementById("refresh").style.display = "none";
document.getElementById("startnewgame").style.display = "none";
document.getElementById("startagain").style.display = "none";

































