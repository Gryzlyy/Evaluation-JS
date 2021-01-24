class Joueur {
    constructor() {
        this.scoreGlobal = 0
        this.scoreRound = 0
        this.isNextPlayer = false
    }
}

// THROW DICE
function throwDice(joueur) {
  let result = getRandom()
  if (result === 1) {
    return joueur.scoreGlobal;
  } else {
    return joueur.scoreRound += result;
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
function whoIsNext(user) {
  let nextPlayer = user.find(element => element.isNextPlayer === true)
  console.log(nextPlayer);
}

// DÉFINIT QUI COMMENCE DE FAÇON RANDOM
function whoStart(user) {
  const starter = Math.floor(Math.random() * 2) 
  user[starter].isNextPlayer = true;
  return starter;
}

/* SWITCH .isNextPlayer's value according to the current player 
if (starter === user[0]) {
  user[0].isNextPlayer = false
  user[1].isNextPlayer = true 
} else {
  user[0].isNextPlayer = true
  user[1].isNextPlayer = false 
}
*/

// START A NEW GAME
function newGame(user) {
  var user = [new Joueur(), new Joueur()]
  let starter = whoStart(user)
  throwDice(user[starter])
}