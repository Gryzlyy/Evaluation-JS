// EVENT TARGETS  
const newGameButton = document.getElementById('newGameBtn')
const resetGameButton = document.getElementById('resetGameBtn')
const rollDiceButton = document.getElementById('rollDiceBtn')
const holdButton = document.getElementById('holdBtn')

const scoreGlobalDisplayP1 = document.getElementById('scoreGlobalDisplayP1')
const scoreRoundDisplayP1 = document.getElementById('scoreRoundDisplayP1')

const scoreGlobalDisplayP2 = document.getElementById('scoreGlobalDisplayP2')
const scoreRoundDisplayP2 = document.getElementById('scoreRoundDisplayP2')

const iconBsP1 = document.getElementById('iconP1')
const iconBsP2 = document.getElementById('iconP2')

const congratsP1 = document.getElementById('congratsP1')
const congratsP2 = document.getElementById('congratsP2')

const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const dice3 = document.getElementById('dice3')
const dice4 = document.getElementById('dice4')
const dice5 = document.getElementById('dice5')
const dice6 = document.getElementById('dice6')


class Joueur {
    constructor() {
        this.scoreGlobal = 0
        this.scoreRound = 0
        this.isNextPlayer = false
    }
}

user = []

// Find the play who's gonna play, and roll dice
function throwDice(user) {
  let player = whoIsNext(user)
  rollDice(player)
}

// Roll dice
function rollDice(player) {
  let result = getRandom()
  dicesdisplay(result)
  console.log(result)
  if (result === 1) {
    player.scoreRound = 0;
    player === users[0] ? scoreRoundDisplayP1.innerHTML = player.scoreRound : scoreRoundDisplayP2.innerHTML = player.scoreRound
    return switchPlayer(users);
  } else {
    player.scoreRound += result;
    player === users[0] ? scoreRoundDisplayP1.innerHTML = player.scoreRound : scoreRoundDisplayP2.innerHTML = player.scoreRound
  }
}

// Display dice according to the result 
function dicesdisplay(result) {
  switch (result) {
    case 1:
      dice1.style.display = 'block';
      dice2.style.display = 'none';
      dice3.style.display = 'none';
      dice4.style.display = 'none';
      dice5.style.display = 'none';
      dice6.style.display = 'none';
      break;
    case 2:
      dice2.style.display = 'block';
      dice1.style.display = 'none';
      dice3.style.display = 'none';
      dice4.style.display = 'none';
      dice5.style.display = 'none';
      dice6.style.display = 'none';
      break;
    case 3: 
      dice3.style.display = 'block';
      dice1.style.display = 'none';
      dice2.style.display = 'none';
      dice4.style.display = 'none';
      dice5.style.display = 'none';
      dice6.style.display = 'none';
      break; 
    case 4:
      dice4.style.display = 'block';
      dice1.style.display = 'none';
      dice2.style.display = 'none';
      dice3.style.display = 'none';
      dice5.style.display = 'none';
      dice6.style.display = 'none';
      break;
    case 5: 
      dice5.style.display = 'block';
      dice1.style.display = 'none';
      dice2.style.display = 'none';
      dice3.style.display = 'none';
      dice4.style.display = 'none';
      dice6.style.display = 'none';
      break;
    case 6:
      dice6.style.display = 'block';
      dice1.style.display = 'none';
      dice2.style.display = 'none';
      dice3.style.display = 'none';
      dice4.style.display = 'none';
      dice5.style.display = 'none';
      break;
    default:
      console.log('Throw dices please !')
      break;
  }
}


// PICK A NUMBER RANDOMLY BETWEEN 1 AND 6
function getRandom () {
    return Math.floor(Math.random() * 6) + 1;
}

// HOLD SG += SR
function hold(user) {
  if (user[0].isNextPlayer === true) {
    user[0].scoreGlobal += user[0].scoreRound;
    scoreGlobalDisplayP1.innerHTML = user[0].scoreGlobal;
    user[0].scoreRound = 0;
    scoreRoundDisplayP1.innerHTML = user[0].scoreRound;
    if (winnerIs(user)){
      congratsP1.style.display = 'block';
      iconBsP1.style.display = 'none';
      return iconBsP2.style.display = 'none';
    }
    return switchPlayer(user) 
  } else if (user[1].isNextPlayer === true) {
    user[1].scoreGlobal += user[1].scoreRound;
    scoreGlobalDisplayP2.innerHTML = user[1].scoreGlobal;
    user[1].scoreRound = 0;
    scoreRoundDisplayP2.innerHTML = user[1].scoreRound;
    if(winnerIs(user)){
      congratsP2.style.display = 'block';
      iconBsP2.style.display = 'none';
      return iconBsP1.style.display = 'none';
    }
    return switchPlayer(user) 
  }
}

// End game, pick the winner
function winnerIs(user) {
  if (user[0].scoreGlobal >= 100 || user[1].scoreGlobal >= 100) {
    console.log('La partie est terminée ! Bravo')
    rollDiceButton.style.display = 'none';
    holdButton.style.display = 'none';
    return true;
  }
}

// Icon display for current player
function iconOwner(user) {
  user[0].isNextPlayer === true ? (iconBsP1.style.display = 'block', iconBsP2.style.display = 'none') : (iconBsP1.style.display = 'none', iconBsP2.style.display = 'block'); 
}

// Who's next player 
function whoIsNext(array) {
  let nextPlayer = array.find(element => element.isNextPlayer === true)
  return nextPlayer;
}

// WHO START, RANDOM PICK
function whoStart(user) {
  const starter = Math.floor(Math.random() * 2) 
  user[starter].isNextPlayer = true;
  console.log('Le joueur ' + (starter + 1) + ' commence !')
  user[0].isNextPlayer === true ? iconBsP1.style.display = 'block' : iconBsP2.style.display = 'block';
  return user[starter];
}

// SWITCH .isNextPlayer's value according to the current player
function switchPlayer(user) {
  if (user[0].isNextPlayer === true) {
    user[0].isNextPlayer = false
    user[1].isNextPlayer = true
    console.log('Au tour du joueur 2 !')
    return iconOwner(user)
  } else if (user[1].isNextPlayer === true) {
    user[0].isNextPlayer = true
    user[1].isNextPlayer = false 
    console.log('Au tour du joueur 1 !')
    return iconOwner(user)
  }
}

// START A NEW GAME
function newGame(user) {
  user = [new Joueur(), new Joueur()]
  whoStart(user)

  holdButton.style.display = 'block';
  rollDiceButton.style.display = 'block';
  newGameButton.style.display = 'none';
  resetGameButton.style.display = 'block';
  congratsP1.style.display = 'none';
  congratsP2.style.display = 'none';
  
  scoreGlobalDisplayP1.innerHTML = user[0].scoreGlobal
  scoreRoundDisplayP1.innerHTML = user[0].scoreRound

  scoreGlobalDisplayP2.innerHTML = user[1].scoreGlobal
  scoreRoundDisplayP2.innerHTML = user[1].scoreRound
  return user;
}

// RESET GAME
function resetGame(user) {
  for (let i = 0; i < user.length; i++) {
    user[i].scoreRound = 0;
    user[i].scoreGlobal = 0;
    user[i].isNextPlayer = false; 
  }

  newGameButton.style.display = 'block';
  holdButton.style.display = 'none';
  rollDiceButton.style.display = 'none';
  resetGameButton.style.display = 'none';

  iconBsP1.style.display = 'none';
  iconBsP2.style.display = 'none';

  scoreGlobalDisplayP1.innerHTML = 0
  scoreRoundDisplayP1.innerHTML = 0
  scoreGlobalDisplayP2.innerHTML = 0
  scoreRoundDisplayP2.innerHTML = 0

  congratsP1.style.display = 'none';
  congratsP2.style.display = 'none';

  dice1.style.display = 'none';
  dice2.style.display = 'none';
  dice3.style.display = 'none';
  dice4.style.display = 'none';
  dice5.style.display = 'none';
  dice6.style.display = 'none';
}


// EVENT ON 'CLICK' FOR NEW GAME AND RESET GAME
newGameButton.addEventListener('click', () => {
  users = newGame();
  whoIsNext(users);
})
resetGameButton.addEventListener('click', () => {
  resetGame(users);
  console.clear();
})


rollDiceButton.addEventListener('click', () => {
  throwDice(users)
}) 
holdButton.addEventListener('click', () => {
  hold(users)
})