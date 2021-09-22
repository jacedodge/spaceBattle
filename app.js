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
console.log(shipArray)

game = () => {
    
    let fireLasers = prompt("The first ship is in your sights. Current Hull integrity: " + shipOne.hull + " Type Fire and click OK to attack. Click cancel to retreat.", "Fire")
    
    
    if (fireLasers === "Fire") {
        if (Math.random() < USS_Schwarzenegger.accuracy) {
            shipOne.hull = shipOne.hull - USS_Schwarzenegger.firepower
            alert("Successful Hit cadet. Current Enemy ship health: " + shipOne.hull + " Your current ship health " + USS_Schwarzenegger.hull)

            if (shipOne.hull <= 0) {
                gameTwo()
            }

        } else {alert("Miss")}

        if (Math.random() < shipOne.accuracy) {
            USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - shipOne.firepower
            alert("The enemy has hit. Current hull integrity " + USS_Schwarzenegger.hull)

           
        } else {alert("The Enemy has missed")}

    game()

    } else {
        alert("You have reatreated and will live to fight another day!")
        game()
            
        }   
    }



gameTwo = () => {

    let fireLasers = prompt("The second ship is in your sights. Current Hull integrity: " + shipTwo.hull + " Type Fire and click OK to attack. Click cancel to retreat.", "Fire")

    if (fireLasers === "Fire") {
        if (Math.random() < USS_Schwarzenegger.accuracy) {
            shipTwo.hull = shipTwo.hull - USS_Schwarzenegger.firepower
            alert("Successful Hit cadet. Current Enemy ship health: " + shipTwo.hull + " Your current ship health " + USS_Schwarzenegger.hull)

            if (shipTwo.hull <= 0) {
                gameThree()
            }

        } else {alert("Miss")}

        if (Math.random() < shipTwo.accuracy) {
            USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - shipTwo.firepower
            alert("The enemy has hit. Current hull integrity " + USS_Schwarzenegger.hull)

           
        } else {alert("The Enemy has missed")}

        gameTwo()

    } else {
        alert("You have reatreated and will live to fight another day!")
        game()

        }   
    }  
    
    
gameThree = () => {

    let fireLasers = prompt("The third ship is in your sights. Current Hull integrity: " + shipThree.hull + " Type Fire and click OK to attack. Click cancel to retreat.", "Fire")

    if (fireLasers === "Fire") {
        if (Math.random() < USS_Schwarzenegger.accuracy) {
            shipThree.hull = shipThree.hull - USS_Schwarzenegger.firepower
            alert("Successful Hit cadet. Current Enemy ship health: " + shipThree.hull + " Your current ship health " + USS_Schwarzenegger.hull)

            if (shipThree.hull <= 0) {
                gameFour()
            }

        } else {alert("Miss")}

        if (Math.random() < shipThree.accuracy) {
            USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - shipThree.firepower
            alert("The enemy has hit. Current hull integrity " + USS_Schwarzenegger.hull)

           
        } else {alert("The Enemy has missed")}

        gameThree()

    } else {
        alert("You have reatreated and will live to fight another day!")
        game()

        }
    }

gameFour = () => {

    let fireLasers = prompt("The fourth ship is in your sights. Current Hull integrity: " + shipFour.hull + " Type Fire and click OK to attack. Click cancel to retreat.", "Fire")

    if (fireLasers === "Fire") {
        if (Math.random() < USS_Schwarzenegger.accuracy) {
            shipFour.hull = shipFour.hull - USS_Schwarzenegger.firepower
            alert("Successful Hit cadet. Current Enemy ship health: " + shipFour.hull + " Your current ship health " + USS_Schwarzenegger.hull)

            if (shipThree.hull <= 0) {
                gameFive()
            }

        } else {alert("Miss")}

        if (Math.random() < shipFour.accuracy) {
            USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - shipFour.firepower
            alert("The enemy has hit. Current hull integrity " + USS_Schwarzenegger.hull)

           
        } else {alert("The Enemy has missed")}

        gameFour()

    } else {
        alert("You have reatreated and will live to fight another day!")
        game()

        }
    }

gameFive = () => {    

    let fireLasers = prompt("The fifth ship is in your sights. Current Hull integrity: " + shipFive.hull + " Type Fire and click OK to attack. Click cancel to retreat.", "Fire")

    if (fireLasers === "Fire") {
        if (Math.random() < USS_Schwarzenegger.accuracy) {
            shipFive.hull = shipFive.hull - USS_Schwarzenegger.firepower
            alert("Successful Hit cadet. Current Enemy ship health: " + shipFive.hull + " Your current ship health " + USS_Schwarzenegger.hull)

            if (shipFive.hull <= 0) {
                gameSix()
            }

        } else {alert("Miss")}

        if (Math.random() < shipFive.accuracy) {
            USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - shipFive.firepower
            alert("The enemy has hit. Current hull integrity " + USS_Schwarzenegger.hull)

           
        } else {alert("The Enemy has missed")}

        gameFive()

    } else {
        alert("You have reatreated and will live to fight another day!")
        game()

        }
    }


gameSix = () => {

    let fireLasers = prompt("The fifth ship is in your sights. Current Hull integrity: " + shipSix.hull + " Type Fire and click OK to attack. Click cancel to retreat.", "Fire")

    if (fireLasers === "Fire") {
        if (Math.random() < USS_Schwarzenegger.accuracy) {
            shipSix.hull = shipSix.hull - USS_Schwarzenegger.firepower
            alert("Successful Hit cadet. Current Enemy ship health: " + shipSix.hull + " Your current ship health " + USS_Schwarzenegger.hull)

            if (shipSix.hull <= 0) {
                alert("Congrats cadet! You have saved the world.")
                gameTotal()
            }

        } else {alert("Miss")}

        if (Math.random() < shipFive.accuracy) {
            USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - shipFive.firepower
            alert("The enemy has hit. Current hull integrity " + USS_Schwarzenegger.hull)

           
        } else {alert("The Enemy has missed")}

        gameFive()

    } else {
        alert("You have reatreated and will live to fight another day!")
        game()

        }
    }


gameTotal = () => {if (USS_Schwarzenegger.hull >= 0) {
alert("Welcome space cadet. The future of humanity is in your hands. There are 6 ships to destroy. You may retreat at any time to fight another day. Destroy those ships and save the world!")
game()
} else {alert("You lost cadet. Good fight, on to the next one")}

gameTotal()

}

gameTotal()
