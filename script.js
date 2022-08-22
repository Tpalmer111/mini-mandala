console.log("Hello, from inside mini-mandala")

// DOMContentLoaded kickes off the game, including coloring the cards.
addEventListener("DOMContentLoaded", () => {

    
    // Original variable list, grabs elements by class or id.
    const fieldDiv = document.querySelector(".field")
    
    const cardOne = document.querySelector("#card-one")
    const cardTwo = document.querySelector("#card-two")
    const cardThree = document.querySelector("#card-three")
    const cardFour = document.querySelector("#card-four")
    
    const redBox = document.querySelector("#red-box")
    const blueBox = document.querySelector("#blue-box")
    const greenBox = document.querySelector("#green-box")
    const yellowBox = document.querySelector("#yellow-box")
    
    const CPUredBox = document.querySelector("#CPUred-box")
    const CPUblueBox = document.querySelector("#CPUblue-box")
    const CPUgreenBox = document.querySelector("#CPUgreen-box")
    const CPUyellowBox = document.querySelector("#CPUyellow-box")
    
    const playerScoreBoard = document.querySelector(".p1-score")
    const p1OnePoint = document.querySelector("#one-point-p1")
    const p1TwoPoint = document.querySelector("#two-point-p1")
    const p1ThreePoint = document.querySelector("#three-point-p1")
    const p1FourPoint = document.querySelector("#four-point-p1")

    const compScoreBoard = document.querySelector(".CPU-score")
    const CPUOnePoint = document.querySelector("#one-point-p1")
    const CPUTwoPoint = document.querySelector("#two-point-p1")
    const CPUThreePoint = document.querySelector("#three-point-p1")
    const CPUFourPoint = document.querySelector("#four-point-p1")

// This function randomly selects a color between "red, blue, green, and yellow"
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

// functions for initializing/refreshing the color of the cards.
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

// variables to keep track each card played in the field, by color and player.
let redTally = 0
let blueTally = 0
let greenTally = 0
let yellowTally = 0

let CPUredTally = 0
let CPUblueTally = 0
let CPUgreenTally = 0
let CPUyellowTally = 0

// variable that stops cards click function during clear phase. 
let playable = true

// callng the functions for intial set of player cards. 
colorFillOne()
colorFillTwo()
colorFillThree()
colorFillFour()

// function that controls CPU turns.
const CPUMove = () => {
    let CPUColor = colorPicker()
    switch(CPUColor) {
        case "red":
            CPUredTally++
            CPUredBox.innerText = CPUredTally
            break
        case "blue":
            CPUblueTally++
            CPUblueBox.innerText = CPUblueTally
            break
        case "green":
            CPUgreenTally++
            CPUgreenBox.innerText = CPUgreenTally
            break
        case "yellow":
            CPUyellowTally++
            CPUyellowBox.innerText = CPUyellowTally
            break
    }  
    detectClearPhaseCPU()
}

// function that controls player turns.
const playerMove = (e) => {
    if (!playable) {
        return 
    }
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
    detectClearPhase()
}

// event listener for card clicks that calls playerMove function
cardOne.addEventListener("click", playerMove) 

cardTwo.addEventListener("click", playerMove)
    
cardThree.addEventListener("click", playerMove)

cardFour.addEventListener("click", playerMove)

// functions for tracking cards played in the field.
const calcRedTotal = () => {
    let x = redTally
    let y = CPUredTally
    let totalRed = (x + y)
    return totalRed
}

const calcBlueTotal = () => {
    let x = blueTally
    let y= CPUblueTally
    let totalBlue = (x + y)
    return totalBlue 
}

const calcGreenTotal = () => {
    let x = greenTally
    let y= CPUgreenTally
    let totalGreen = (x + y)
    return totalGreen 
}

const calcYellowTotal = () => {
    let x = yellowTally
    let y= CPUyellowTally
    let totalYellow = (x + y)
    return totalYellow 
}

// function that checks for conditons that trigger clear phase (player turn).
const detectClearPhase = () => {
    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        clearPhasePlr()
    } else {
        CPUMove()
        return false
    }

}

// function that checks for conditons that trigger clear phase (CPU turn).
const detectClearPhaseCPU = () => {

    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        clearPhaseCPU()
    } else {
        return false
    }

}

// function to disable player cards for clear phase.
const disableCards = () => {
    fieldReady()
    playable = false
    let cards = document.getElementsByClassName("card")
        for(i = 0; i < cards.length; i++) {
            let card = cards[i]

        switch(card.style.backgroundColor) {
            case "red":
                card.style.backgroundColor = "grey"
                break
            case "blue":
                card.style.backgroundColor = "grey"
                break
            case "green":
                card.style.backgroundColor = "grey"
                break
            case "yellow":
                card.style.backgroundColor = "grey"
                break
        }
    }
}

// function for clear phase initiated by player.
const clearPhasePlr = () => {
    disableCards()
}

// funtion for clear phase initiated by CPU.
const clearPhaseCPU = () => {
    disableCards()
    CPUScore()
}

// arrays to track player score
let playerOneRed = []
let playerOneBlue = []
let playerOneGreen = []
let playerOneYellow = []

// function to make colors in field area clickable.
const fieldReady = () => {
    // if (!playable) {
        redBox.addEventListener("click", function(e) {
            let newScore = calcRedTotal()
            playerOneRed.push("red")
            scoreColor = "red"
            buildScoreSheet()
            CPUScore()
        }) 
        blueBox.addEventListener("click", function(e) {
            let newScore = calcBlueTotal()
            playerOneBlue.push("blue")
            buildScoreSheet()
            CPUScore()
        })
        greenBox.addEventListener("click", function(e) {
            let newScore = calcGreenTotal()
            playerOneGreen.push("green")
            buildScoreSheet()
            CPUScore()
        })
        yellowBox.addEventListener("click", function(e) {
            let newScore = calcYellowTotal()
            playerOneYellow.push("yellow")
            buildScoreSheet()
            CPUScore()
        })
    }
    
//}

let CPURed = []
let CPUBlue = []
let CPUGreen = []
let CPUYellow = []

const CPUScore = () => {
    let r = calcRedTotal
    let b = calcBlueTotal
    let g = calcGreenTotal
    let y = calcYellowTotal 
    if (r >= b && r >= g && r >= y) {
        CPURed.push("red")
        scoreColor = "red"
        buildScoreSheetCPU()
    } else if (b >= r && b >= g && b >= y) {
        CPUBlue.push("blue")
        scoreColor = "blue"
        buildScoreSheetCPU()
    } else if (g >= r && g >= b && g >= y) {
        CPUGreen.push("green")
        scoreColor = "green"
        buildScoreSheetCPU()
    } else if (y >= r && y >= b && y>= g) {
        CPUYellow.push("yellow")
        scoreColor = "yellow"
        buildScoreSheetCPU()
    }

}

let scoreColor = ""

const buildScoreSheet = () => {

    if (p1OnePoint.style.backgroundColor == "white") {
        p1OnePoint.style.backgroundColor = scoreColor
    } else if (p1TwoPoint.style.backgroundColor == "white") {
        p1TwoPoint.style.backgroundColor = scoreColor
    } else if (p1ThreePoint.style.backgroundColor == "white") {
        p1ThreePoint.style.backgroundColor = scoreColor
    } else if (p1FourPoint.style.backgroundColor == "white") {
        p1FourPoint.style.backgroundColor = scoreColor
    } else { 
        endGameTrigger()
        } 
    
    }

    const buildScoreSheetCPU = () => {

        if (CPUOnePoint.style.backgroundColor == "white") {
            CPUOnePoint.style.backgroundColor = scoreColor
        } else if (CPUTwoPoint.style.backgroundColor == "white") {
            CPUTwoPoint.style.backgroundColor = scoreColor
        } else if (CPUThreePoint.style.backgroundColor == "white") {
            CPUThreePoint.style.backgroundColor = scoreColor
        } else if (CPUFourPoint.style.backgroundColor == "white") {
            CPUFourPoint.style.backgroundColor = scoreColor
        } else {
            endGameTrigger()
        } 
        
        }

// function to trigger end game.
const endGameTrigger = () => {
    // this function needs to tally final score, display scores and delcare a winner 
    console.log("I just don't know anymore..." + playerOneRed)
    endScore()
}

})


