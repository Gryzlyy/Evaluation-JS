// EVENT TARGETS  
const newGameButton = document.getElementById('newGameBtn')
const resetGameButton = document.getElementById('resetGameBtn')
const rollDiceButton = document.getElementById('rollDiceBtn')
const holdButton = document.getElementById('holdBtn')

let scoreGlobalDisplayP1 = document.getElementById('scoreGlobalDisplayP1')
let scoreRoundDisplayP1 = document.getElementById('scoreRoundDisplayP1')

let scoreGlobalDisplayP2 = document.getElementById('scoreGlobalDisplayP2')
let scoreRoundDisplayP2 = document.getElementById('scoreRoundDisplayP2')

const iconBsP1 = document.getElementById('iconP1')
const iconBsP2 = document.getElementById('iconP2')

class Joueur {
    constructor() {
        this.scoreGlobal = 0
        this.scoreRound = 0
        this.isNextPlayer = false
    }
}

user = []

// THROW DICE
function throwDice(user) {
  let player = whoIsNext(user)
  rollDice(player)
}

function rollDice(player) {
  let result = getRandom()
  if (result === 1) {
    player.scoreRound = 0;
    return switchPlayer(users);
  } else {
    return player.scoreRound += result;
  }
}

// PICK A NUMBER RANDOMLY BETWEEN 1 AND 6
function getRandom () {
    return Math.floor(Math.random() * 6) + 1;
}

// HOLD SO SG += SR
function hold(joueur) {
  joueur.isNextPlayer === false
  return joueur.scoreGlobal += joueur.scoreRound;
}



// DÉFINIT QUI EST LE PROCHAIN JOUEUR 
function whoIsNext(array) {
  let nextPlayer = array.find(element => element.isNextPlayer === true)
  console.log(nextPlayer)
  return nextPlayer;
}

// DÉFINIT QUI COMMENCE DE FAÇON RANDOM
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
  } else if (user[1].isNextPlayer === true) {
    user[0].isNextPlayer = true
    user[1].isNextPlayer = false 
  }
}





// START A NEW GAME
function newGame(user) {
  user = [new Joueur(), new Joueur()]
  whoStart(user)

  holdButton.style.display = 'block';
  rollDiceButton.style.display = 'block';
  //newGameButton.style.display = 'none';
  
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

  iconBsP1.style.display = 'none';
  iconBsP2.style.display = 'none';

  scoreGlobalDisplayP1.innerHTML = 0
  scoreRoundDisplayP1.innerHTML = 0
  scoreGlobalDisplayP2.innerHTML = 0
  scoreRoundDisplayP2.innerHTML = 0
}


// EVENT ON 'CLICK' FOR NEW GAME AND RESET GAME
newGameButton.addEventListener('click', () => {
  users = newGame();
  whoIsNext(users);
})
resetGameButton.addEventListener('click', () => {
  resetGame(user);
  console.clear();
})


rollDiceButton.addEventListener('click', () => {
  throwDice(users)
}) 