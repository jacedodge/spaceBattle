var USS_Schwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}


var shipOne = {
    hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
    accuracy: (Math.random() * .2) + .6
    }

var shipTwo = {
        hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
        firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
        accuracy: (Math.random() * .2) + .6
    }


var shipThree = {
        hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
        firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
        accuracy: (Math.random() * .2) + .6   
    }

var shipFour = {
        hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
        firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
        accuracy: (Math.random() * .2) + .6   
    }

var shipFive = {
        hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
        firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
        accuracy: (Math.random() * .2) + .6   
    }

var shipSix = {
        hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
        firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
        accuracy: (Math.random() * .2) + .6   
    }

var shipArray = [shipOne,shipTwo,shipThree,shipFour,shipFive,shipSix]
var currentHumanHealth = USS_Schwarzenegger.hull
var currentAlienHealth = shipOne.hull



humanLasers = () => {
    if (Math.random() < USS_Schwarzenegger.accuracy){
        alert('Successful Hit')
        currentAlienHealth = currentAlienHealth - USS_Schwarzenegger.firepower
        console.log(currentAlienHealth)
    } else {
        alert('You Missed')
    }
    
}

alienLasers = () => {
    if(Math.random() < shipOne.accuracy){
        alert('You Have Been Hit')
        currentHumanHealth = currentHumanHealth - shipOne.firepower
        console.log(currentHumanHealth)
    } else {
        alert('The Enemy Missed')
    }
}

battle = () => {
    
    humanLasers()
    if (currentAlienHealth <= 0){
        currentAlienHealth = shipTwo.hull
        return
    }
    alienLasers()
}


    gameWin = () => {
    if (USS_Schwarzenegger.hull = 0){
    alert('You lose.')
    } else {
        battle()
}   
}

gameWin()

