class Joueur {
    constructor() {
        this.scoreGlobal = 0
        this.scoreRound = 0
    }
}

// PICK A NUMBER RANDOMLY BETWEEN 1 AND 6
function getRandom () {
    return Math.floor(Math.random() * 6) + 1
}

function throwDice(scoreGlobal) {
    let result = getRandom()
    if (result === 1) {
      return scoreGlobal;
    } else {
      return result;
    }
}