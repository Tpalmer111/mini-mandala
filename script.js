console.log("Hello, from inside mini-mandala")

addEventListener("DOMContentLoaded", () => {
    const compScoreBoard = document.querySelector(".CPU-score")
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


//This function randomly selects a color between "red, blue, green, and yellow"
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

let redTally = 0
let blueTally = 0
let greenTally = 0
let yellowTally = 0

let CPUredTally = 0
let CPUblueTally = 0
let CPUgreenTally = 0
let CPUyellowTally = 0

let playable = true

colorFillOne()
colorFillTwo()
colorFillThree()
colorFillFour()

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

cardOne.addEventListener("click", playerMove) 

cardTwo.addEventListener("click", playerMove)
    
cardThree.addEventListener("click", playerMove)

cardFour.addEventListener("click", playerMove)

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

const detectClearPhase = () => {

    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        clearPhasePlr()
    } else {
        CPUMove()
        return false
    }

}

const detectClearPhaseCPU = () => {

    if (calcRedTotal() >= 2 && calcBlueTotal() >= 2 && calcGreenTotal() >= 2 && calcYellowTotal() >= 2) {
        clearPhaseCPU()
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
                card.style.backgroundColor = "darkred"
                break
            case "blue":
                card.style.backgroundColor = "darkblue"
                break
            case "green":
                card.style.backgroundColor = "darkgreen"
                break
            case "yellow":
                card.style.backgroundColor = "darkorange"
                break
        }
    }
}

// function to make colors in field area clickable

// function that combines cpu and plr color tallies

// funtion that adds selected color's total to score

// let redTally = 0
// let blueTally = 0
// let greenTally = 0
// let yellowTally = 0

// let CPUredTally = 0
// let CPUblueTally = 0
// let CPUgreenTally = 0
// let CPUyellowTally = 0

const clearPhasePlr = () => {
    disableCards()
    // 
}

const clearPhaseCPU = () => {
    disableCards()
    // 
}

})


