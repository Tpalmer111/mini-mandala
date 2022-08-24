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

const p1OnePoint = document.querySelector("#one-point-p1")
const p1TwoPoint = document.querySelector("#two-point-p1")
const p1ThreePoint = document.querySelector("#three-point-p1")
const p1FourPoint = document.querySelector("#four-point-p1")

const CPUOnePoint = document.querySelector("#one-point-p1")
const CPUTwoPoint = document.querySelector("#two-point-p1")
const CPUThreePoint = document.querySelector("#three-point-p1")
const CPUFourPoint = document.querySelector("#four-point-p1")

let redTally = 0
let blueTally = 0
let greenTally = 0
let yellowTally = 0

let CPUredTally = 0
let CPUblueTally = 0
let CPUgreenTally = 0
let CPUyellowTally = 0

let playerOneRed = 0
let playerOneBlue = 0
let playerOneGreen = 0
let playerOneYellow = 0

let CPURed = 0
let CPUBlue = 0
let CPUGreen = 0
let CPUYellow = 0

let p1Points = 0
let CPUPoints = 0

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

const scoreCards = () => {
    document.querySelector("#one-point-CPU").style.backgroundColor = "yellow"
    document.querySelector("#two-point-CPU").style.backgroundColor = "green"
    document.querySelector("#three-point-CPU").style.backgroundColor = "blue"
    document.querySelector("#four-point-CPU").style.backgroundColor = "red"
    document.querySelector("#one-point-p1").style.backgroundColor = "red"
    document.querySelector("#two-point-p1").style.backgroundColor = "blue"
    document.querySelector("#three-point-p1").style.backgroundColor = "green"
    document.querySelector("#four-point-p1").style.backgroundColor = "yellow"  
    
    document.getElementById("p1-endgame").innerText = "PLAYER SCORE:    " + p1Points
    document.getElementById("CPU-endgame").innerText = "CPU SCORE:  " + CPUPoints

}

scoreCards()

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

const cardsRefresh = () => {
    colorFillOne()
    colorFillTwo()
    colorFillThree()
    colorFillFour()
}

cardsRefresh()

let playable = true

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
    CPUMove()
    console.log("so far so good, i hope")
}

cardOne.addEventListener("click", playerMove) 
cardTwo.addEventListener("click", playerMove)
cardThree.addEventListener("click", playerMove)
cardFour.addEventListener("click", playerMove)

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

const detectClearPhase = () => {
    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        disableCards()
    } else {
        return false
    }
}

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
        switch(e.srcElement.id) {
            case "red-box":
                let r = calcRedTotal()
                playerOneRed += r
                cleanRed()
                CPUChoice()
                break
            case "blue-box":
                let b = calcBlueTotal()
                playerOneBlue += b
                cleanBlue()
                CPUChoice()
                break
            case "green-box":
                let g = calcGreenTotal()
                playerOneGreen += g
                cleanGreen()
                CPUChoice()
                break
            case "yellow-box":
                let y = calcYellowTotal()
                playerOneYellow += y
                cleanYellow()
                CPUChoice()
                break
        }
        
    }

    const cleanRed = () => {
        redTally = 0
        redBox.innerText = redTally
        CPUredTally = 0
        CPUredBox.innerText = CPUredTally
    }

    const cleanBlue = () => {
        blueTally = 0
        blueBox.innerText = blueTally
        CPUblueTally = 0
        CPUblueBox.innerText = CPUblueTally
    }

    const cleanGreen = () => {
        greenTally = 0
        greenBox.innerText = greenTally
        CPUgreenTally = 0
        CPUgreenBox.innerText = CPUgreenTally
    }

    const cleanYellow = () => {
        yellowTally = 0
        yellowBox.innerText = yellowTally
        CPUyellowTally = 0
        CPUyellowBox.innerText = CPUyellowTally
    }

    const CPUChoice = () => {

        let r = calcRedTotal()
        let b = calcBlueTotal()
        let g = calcGreenTotal()
        let y = calcYellowTotal()

        let colorArray = [r, b, g, y]
        let lowToHigh = colorArray.sort((a, b) => a - b)
        console.log(lowToHigh[3])

        switch (lowToHigh) {
            case "r":
                console.log("comp chose red")    
                break
            case "b":
                console.log("comp chose red")
                break
            case "g":
                console.log("comp chose red") 
                break
            case "y":
                console.log("comp chose red")
                break
        }
        detectNewRound()   
    }
    redBox.addEventListener("click", playerChoice) 
    blueBox.addEventListener("click", playerChoice)
    greenBox.addEventListener("click", playerChoice)
    yellowBox.addEventListener("click", playerChoice)

}



const detectNewRound = () => {
    if (calcRedTotal() == 0 && calcBlueTotal() == 0 && calcGreenTotal() == 0 && calcYellowTotal() == 0) {
        roundSet()
    }
}

let roundTwo = false
let roundThree = false

const roundSet = () => {
    if (!roundTwo) {
        roundTwo = true
        playable = true
        cardsRefresh()
        scoreItUp()
    } else if (roundTwo && !roundThree) {
        roundThree = true
        playable = true
        cardsRefresh()
        scoreItUp() 
    } else if (roundTwo && roundThree) {
        scoreItUp()
        console.log("Player red total = " + playerOneRed)
        console.log()
    }
}

console.log("p1 bg color is " +  p1OnePoint.style.backgroundColor)



const scoreItUp = () => {
    let z = playerOneRed
    let y = playerOneBlue
    let x = playerOneGreen
    let w = playerOneYellow

    let zz = CPURed
    let yy = CPUBlue
    let xx = CPUGreen
    let ww = CPUYellow

    p1Points += z + (y * 2) + (x * 3) + (w * 4)
    CPUPoints += w + (xx * 2) + (yy * 3) + (zz * 4)

    document.getElementById("p1-endgame").innerText = "PLAYER SCORE:    " + p1Points
    document.getElementById("CPU-endgame").innerText = "CPU SCORE:  " + CPUPoints

}














