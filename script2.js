//////////////////////////   
//       SETUP          //
//////////////////////////


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

// variables to track player score
let playerOneRed = 0
let playerOneBlue = 0
let playerOneGreen = 0
let playerOneYellow = 0

// variables to track CPU score
let CPURed = 0
let CPUBlue = 0
let CPUGreen = 0
let CPUYellow = 0

// variables to track when the field is empty
let fieldEmpty = false
let rEmpty = false
let bEmpty = false
let gEmpty = false
let yEmpty = false

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

// function callng the functions for intial set of player cards. 
const cardsRefresh = () => {
    colorFillOne()
    colorFillTwo()
    colorFillThree()
    colorFillFour()
}

// original loading of player cards
cardsRefresh()





//////////////////////////////////
//       PHASE ONE: PLAY        //
//////////////////////////////////


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

    // refreshes each card as its played
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
    // checks for 
    detectClearPhase()
}

// event listener for card clicks that calls playerMove function
cardOne.addEventListener("click", playerMove) 

cardTwo.addEventListener("click", playerMove)

cardThree.addEventListener("click", playerMove)

cardFour.addEventListener("click", playerMove)

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
    detectClearPhase()
}

// functions for tracking cards played in the field.
const calcRedTotal = () => {
    let x = redTally
    let y = CPUredTally
    let totalRed = (x + y)
    return totalRed
}

const calcBlueTotal = () => {
    let x = blueTally
    let y = CPUblueTally
    let totalBlue = (x + y)
    return totalBlue 
}

const calcGreenTotal = () => {
    let x = greenTally
    let y = CPUgreenTally
    let totalGreen = (x + y)
    return totalGreen 
}

const calcYellowTotal = () => {
    let x = yellowTally
    let y = CPUyellowTally
    let totalYellow = (x + y)
    return totalYellow 
}

// function that checks for conditons that trigger clear phase (player turn).
const detectClearPhase = () => {
    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        clearPhasePlr()
        return true
    } else {
        CPUMove()
        return false
    }
}

// function that checks for conditons that trigger clear phase on CPU turn.
const detectClearPhaseCPU = () => {
    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        clearPhaseCPU()
        return true
    } else {
        return false
    }
}






//////////////////////////////////////////////////
//         PHASE TWO: CLEAR THE BOARD           //
//////////////////////////////////////////////////



// function for clear phase initiated by player.
const clearPhasePlr = () => {
    disableCards()
    
}

// funtion for clear phase initiated by CPU.
const clearPhaseCPU = () => {
    disableCards()
    
}

// function to disable player cards for clear phase.
const disableCards = () => {
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




    const playerChoice = (e) => {
        if (playable) {
            return 
        }

        // event listener for card clicks that calls playerMove function
        let currentChoice = e.srcElement.style.backgroundColor
        switch(currentChoice) {
            case "red":
                let r = calcRedTotal()
                playerOneRed += r
                scoreColor = "red"
                buildScoreSheet()
                break
            case "blue":
                let b = calcBlueTotal()
                playerOneBlue += b
                scoreColor = "blue"
                buildScoreSheet()
                break
            case "green":
                let g = calcGreenTotal()
                playerOneGreen += g
                scoreColor = "green"
                buildScoreSheet()
                break
            case "yellow":
                let y = calcYellowTotal()
                playerOneYellow += y
                scoreColor = "yellow"
                buildScoreSheet()
                break
        }

        // zeros out the chosen box (CPU side + PLAYER side)
        switch(currentChoice) {
            
            case "red":
                redTally = 0
                redBox.innerText = redTally
                CPUredTally = 0
                CPUredBox.innerText = CPUredTally
                rEmpty = true
                
                break
            case "blue":
                blueTally = 0
                blueBox.innerText = blueTally
                CPUblueTally = 0
                CPUblueBox.innerText = CPUbluetally
                bEmpty = true
                
                break
            case "green":
                greenTally = 0
                greenBox.innerText = greenTally
                CPUgreenTally = 0
                CPUgreenBox.innerText = CPUgreenTally
                gEmpty = true
                
                break
            case "yellow":
                yellowTally = 0
                yellowBox.innerText = yellowTally
                CPUyellowTally = 0
                CPUyellowBox.innerText = CPUyellowTally
                yEmpty = true
                
                break }
        // checks for 
        detectPlayPhase()
        CPUChoice()
       
    }

    redBox.addEventListener("click", playerChoice) 

    blueBox.addEventListener("click", playerChoice)

    greenBox.addEventListener("click", playerChoice)

    yellowBox.addEventListener("click", playerChoice)

    // CPU clear phase turn
    const CPUChoice = () => {
        let r = calcRedTotal()
        let b = calcBlueTotal()
        let g = calcGreenTotal()
        let y = calcYellowTotal()

        

        if (r >= b && r >= g && r >= y) {
                CPURed += r
                scoreColor = "red"
                redTally = 0
                redBox.innerText = redTally
                CPUredTally = 0
                CPUredBox.innerText = CPUredTally
                rEmpty = true
                playerChoice()
            
        } else if (b >= r && b >= g && b >= y) {
                CPUBlue += b
                scoreColor = "blue"
                blueTally = 0
                blueBox.innerText = blueTally
                CPUblueTally = 0
                CPUblueBox.innerText = CPUbluetally
                bEmpty = true
                playerChoice()

        } else if (g >= r && g >= b && g >= y) {
                CPUGreen += g
                scoreColor = "green"
                greenTally = 0
                greenBox.innerText = greenTally
                CPUgreenTally = 0
                CPUgreenBox.innerText = CPUgreenTally
                gEmpty = true
                playerChoice()
            
        } else if (y >= r && y >= b && y>= g) {
                CPUYellow += y
                scoreColor = "yellow"
                yellowTally = 0
                yellowBox.innerText = yellowTally
                CPUyellowTally = 0
                CPUyellowBox.innerText = CPUyellowTally
                yEmpty = true
                playerChoice()

        }
        // checks for play phase reset conditions
        detectPlayPhase()
        

    }
    CPUChoice()
}



const detectPlayPhase = () => {
    if (rEmpty && bEmpty && gEmpty && yEmpty) {
        fieldEmpty = true
        playable = true
    } else {
        return false
    }

}


const buildScoreSheet = () => {
    console.log("idk")
}

