// MINI MANDALA GAME

// vars for getting player cards by id
const cardOne = document.querySelector("#card-one")
const cardTwo = document.querySelector("#card-two")
const cardThree = document.querySelector("#card-three")
const cardFour = document.querySelector("#card-four")

// vars for getting boxes in the player's field by id
const redBox = document.querySelector("#red-box")
const blueBox = document.querySelector("#blue-box")
const greenBox = document.querySelector("#green-box")
const yellowBox = document.querySelector("#yellow-box")

// vars for getting the boxes in the cpu field by id
const cpuredBox = document.querySelector("#cpured-box")
const cpublueBox = document.querySelector("#cpublue-box")
const cpugreenBox = document.querySelector("#cpugreen-box")
const cpuyellowBox = document.querySelector("#cpuyellow-box")

// vars for getting the boxes for the player point by id
const p1OnePoint = document.querySelector("#one-point-p1")
const p1TwoPoint = document.querySelector("#two-point-p1")
const p1ThreePoint = document.querySelector("#three-point-p1")
const p1FourPoint = document.querySelector("#four-point-p1")

// vars for getting the boxes for the cpu point by id
const cpuOnePoint = document.querySelector("#one-point-p1")
const cpuTwoPoint = document.querySelector("#two-point-p1")
const cpuThreePoint = document.querySelector("#three-point-p1")
const cpuFourPoint = document.querySelector("#four-point-p1")

// var for the score display row by id
const winWin = document.querySelector("#win")
const p1Display = document.getElementById("p1-endgame")
const cpuDisplay = document.getElementById("cpu-endgame")

const click = document.querySelector("#click")
const here = document.querySelector("#here")

// vars to track colors in the player field
let redTally = 0
let blueTally = 0
let greenTally = 0
let yellowTally = 0

// vars to track colors in the cpu field
let cpuredTally = 0
let cpublueTally = 0
let cpugreenTally = 0
let cpuyellowTally = 0

// vars to track the pointes by color collected by the player
let playerOneRed = 0
let playerOneBlue = 0
let playerOneGreen = 0
let playerOneYellow = 0

// vars to track the pointes by color collected by the cpu
let cpuRed = 0
let cpuBlue = 0
let cpuGreen = 0
let cpuYellow = 0

// vard to track total points per player and cpu
let p1Points = 0
let cpuPoints = 0

// picks a random color
const colorPicker = () => {
    let num = Math.floor(Math.random() * 4)
    if (num == 0) {
        return "red"
    } else if (num == 1) {
        return "blue"
    } else if (num == 2) {
        return "green"
    } else if (num == 3) {
        return "yellow"
    }
}

// changes the background color of both rows of point boxes
const scoreCards = () => {
    document.querySelector("#one-point-cpu").style.backgroundColor = "yellow"
    document.querySelector("#two-point-cpu").style.backgroundColor = "green"
    document.querySelector("#three-point-cpu").style.backgroundColor = "blue"
    document.querySelector("#four-point-cpu").style.backgroundColor = "red"
    document.querySelector("#one-point-p1").style.backgroundColor = "red"
    document.querySelector("#two-point-p1").style.backgroundColor = "blue"
    document.querySelector("#three-point-p1").style.backgroundColor = "green"
    document.querySelector("#four-point-p1").style.backgroundColor = "yellow"  
    
    p1Display.innerText = "PLAYER SCORE:    " + p1Points
    cpuDisplay.innerText = "cpu SCORE:  " + cpuPoints
    winWin.innerText = "ROUND ONE: pick a card"

}

scoreCards()

// puts a random background color player cards
const colorFillOne = () => {
    document.querySelector("#card-one").style.backgroundColor = colorPicker()
}

const colorFillTwo = () => {
    document.querySelector("#card-two").style.backgroundColor = colorPicker()
}

const colorFillThree = () => {
    document.querySelector("#card-three").style.backgroundColor = colorPicker()
}

const colorFillFour = () => {
    document.querySelector("#card-four").style.backgroundColor = colorPicker()
}

// refresges all of the player cards
const cardsRefresh = () => {
    colorFillOne()
    colorFillTwo()
    colorFillThree()
    colorFillFour()
}

cardsRefresh()

// var to track if the player cards are able to be played
let playable = true

// initiates the player moves, cpu moves, and triggers phase-two
const playersMoves = (e) => {
    // checks that the player is allowed to play a card
    if (!playable) {
        return 
    }
    // collects the color from the clicked card and keeps track in the player field
    let currentColor = e.srcElement.style.backgroundColor
    switch(currentColor) {
        case "red":
            redTally++
            redBox.innerText = redTally
            break
        case "blue":
            blueTally++
            blueBox.innerText = blueTally
            break
        case "green":
            greenTally++
            greenBox.innerText = greenTally
            break
        case "yellow":
            yellowTally++
            yellowBox.innerText = yellowTally
            break
    }
    // refreshes the played card
    switch(e.srcElement.id) {
        case "card-one":
            colorFillOne()
            break
        case "card-two":
            colorFillTwo()
            break
        case "card-three":
            colorFillThree()
            break
        case "card-four":
            colorFillFour()
            break
    }
    // checks for the phase-two conditions
    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        phaseTwo()
        return
    } else {
        // picks a random color for the cpu turn and keeps count in the cpu field
        switch(colorPicker()) {
            case "red":
                cpuredTally++
                cpuredBox.innerText = cpuredTally
                break
            case "blue":
                cpublueTally++
                cpublueBox.innerText = cpublueTally
                break
            case "green":
                cpugreenTally++
                cpugreenBox.innerText = cpugreenTally
                break
            case "yellow":
                cpuyellowTally++
                cpuyellowBox.innerText = cpuyellowTally
                break
        }  
    }
    // checks for the phase-two conditions
    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        phaseTwo()
        return
    } else {
        return
    }
}

// event listeners for "clicks" by the player to initiate the players turn
cardOne.addEventListener("click", playersMoves) 
cardTwo.addEventListener("click", playersMoves)
cardThree.addEventListener("click", playersMoves)
cardFour.addEventListener("click", playersMoves)

// keeps track of the red cards in both the cpu and Player fields
const calcRedTotal = () => {
    let x = redTally
    let y = cpuredTally
    let totalRed = (x + y)
    return totalRed
}

// keeps track of the bliue cards in both the cpu and Player fields
const calcBlueTotal = () => {
    let x = blueTally
    let y = cpublueTally
    let totalBlue = (x + y)
    return totalBlue 
}

// keeps track of the green cards in both the cpu and Player fields
const calcGreenTotal = () => {
    let x = greenTally
    let y = cpugreenTally
    let totalGreen = (x + y)
    return totalGreen 
}

// keeps track of the yellow cards in both the cpu and Player fields
const calcYellowTotal = () => {
    let x = yellowTally
    let y = cpuyellowTally
    let totalYellow = (x + y)
    return totalYellow 
}
// dissables player card clicks, initiates phase-two, player and cpu moves
const phaseTwo = () => {
    playable = false
    click.innerText = "CLICK >"
    here.innerText = "< HERE"
    winWin.innerText = "CLEAR THE BOARD: pick a color"
    let cards = document.getElementsByClassName("card")
        for(i = 0; i < cards.length; i++) {
            let card = cards[i]
            switch(card.style.backgroundColor) {
                case "red":
                    card.style.backgroundColor = "darkslategrey"
                    break
                case "blue":
                    card.style.backgroundColor = "darkslategrey"
                    break
                case "green":
                    card.style.backgroundColor = "darkslategrey"
                    break
                case "yellow":
                    card.style.backgroundColor = "darkslategrey"
                    break
            }
        }
    
    // records the players color choice from the field
    const playerChoice = (e) => {
        // vars to track the current value of each color in the field
        let r = calcRedTotal()
        let b = calcBlueTotal()
        let g = calcGreenTotal()
        let y = calcYellowTotal()

        if (playable) {   
            return 
        }  
        // records the player choice, then clears the values
        switch(e.srcElement.id) {
            case "red-box":
                playerOneRed += r
                cleanRed()
                break
            case "blue-box":
                playerOneBlue += b
                cleanBlue()
                break
            case "green-box":
                playerOneGreen += g
                cleanGreen()
                break
            case "yellow-box":
                playerOneYellow += y
                cleanYellow()
                break
        }
        // controls and records the cpu choice and then clears the values
        if (r > 0) {
            cpuRed += r
            cleanRed()
        } else if (b > 0) {
            cpuBlue += b
            cleanBlue()
        } else if (g > 0) {
            cpuGreen += g
            cleanGreen()
        } else if (y > 0) {
            cpuYellow += y
            cleanYellow()
        }
        // checks to see if all colors have been chosen
        if (calcRedTotal() == 0 && calcBlueTotal() == 0 && calcGreenTotal() == 0 && calcYellowTotal() == 0) {
            roundSet()
            return
         } else {
            return
         }
    }

const listeners = () => {
    if (playable) {
        return
    } else if (!playable) {
    // event listeners for the cards to be selected from the player field
    redBox.addEventListener("click", playerChoice) 
    blueBox.addEventListener("click", playerChoice)
    greenBox.addEventListener("click", playerChoice)
    yellowBox.addEventListener("click", playerChoice)
} 
}

listeners()
    // reset the red cards in the field
    const cleanRed = () => {
        redTally = 0
        redBox.innerText = redTally
        cpuredTally = 0
        cpuredBox.innerText = cpuredTally
        calcRedTotal()
    }

    // reset the blue cards in the field
    const cleanBlue = () => {
        blueTally = 0
        blueBox.innerText = blueTally
        cpublueTally = 0
        cpublueBox.innerText = cpublueTally
        calcBlueTotal()
    }

    // reset the green cards in the field 
    const cleanGreen = () => {
        greenTally = 0
        greenBox.innerText = greenTally
        cpugreenTally = 0
        cpugreenBox.innerText = cpugreenTally
        calcGreenTotal()
    }

    // reset the yellow cards in the field
    const cleanYellow = () => {
        yellowTally = 0
        yellowBox.innerText = yellowTally
        cpuyellowTally = 0
        cpuyellowBox.innerText = cpuyellowTally
        calcYellowTotal()
    }
}

// vars to track the rounds
let roundTwo = false
let roundThree = false

// changes from one round to the next
const roundSet = () => {
    if (!roundTwo) {
        roundTwo = true
        playable = true
        winWin.innerText = "ROUND TWO"
        cardsRefresh()
        scoreItUp()
    } else if (roundTwo && !roundThree) {
        roundThree = true
        playable = true
        winWin.innerText = "ROUND THREE"
        scoreItUp()
        cardsRefresh()
    } else if (roundTwo && roundThree) {
        playable = true
        scoreItUp()
        winnerWinner()      
    }
}

// calculates score
const scoreItUp = () => {
    let z = playerOneRed
    let y = playerOneBlue
    let x = playerOneGreen
    let w = playerOneYellow

    let zz = cpuRed
    let yy = cpuBlue
    let xx = cpuGreen
    let ww = cpuYellow

    y = y * 2
    x = x * 3
    w = w * 4

    xx = xx * 2
    yy = yy * 3
    zz = zz * 4

    p1Points += (z + y + x + w)
    cpuPoints += (ww + xx + yy + zz)

    p1Display.innerText = "PLAYER SCORE:    " + p1Points
    cpuDisplay.innerText = "cpu SCORE:  " + cpuPoints
}

// determines the winner and displays endgame text
const winnerWinner = () => {
    let text = "click here to play again"
    
    // resets the game
    const againButton = document.createElement("div")
    againButton.innerText = text 
    againButton.style.fontFamily = "Bungee Shade"
    
    const againAndAgain = document.querySelector(".again")
    againAndAgain.appendChild(againButton)

    againButton.addEventListener("click", function() {
        playable = true
        clearDone = true
        roundTwo = false
        roundThree = false
        p1Points = 0
        cpuPoints = 0
        winWin.innerText = "ROUND ONE: pick a card"
        p1Display.innerText = "PLAYER SCORE:    " + p1Points
        cpuDisplay.innerText = "cpu SCORE:  " + cpuPoints
        againButton.innerText = ""
        cardsRefresh()
})
    if (p1Points > cpuPoints){
        winWin.innerText = "YOU WIN!"
    } else if (p1Points < cpuPoints) {
        winWin.innerText = "YOU LOSE!"
    } else if (p1Points === cpuPoints) {
        winWin.innerText = "YAY A TIE!"
    }
}

