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

 console.log(colorPicker())

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


colorFillOne()
colorFillTwo()
colorFillThree()
colorFillFour()

const CPUMove = () => {
    let CPUColor = colorPicker()
    if (CPUColor == "red") {
        CPUredTally++
        CPUredBox.innerText = CPUredTally
        console.log(calcRedTotal())
    } else if (CPUColor == "blue") {
        CPUblueTally++
        CPUblueBox.innerText = CPUblueTally
    } else if (CPUColor == "green"){
        CPUgreenTally++
        CPUgreenBox.innerText = CPUgreenTally
    } else if (CPUColor = "yellow") {
        CPUyellowTally++
        CPUyellowBox.innerText = CPUyellowTally
    }
}

cardOne.addEventListener("click", () => {
    let currentColor = cardOne.style.backgroundColor
    if (currentColor == "red") {
        redTally++
        redBox.innerText = redTally
        console.log(calcRedTotal())
    } else if (currentColor == "blue") {
        blueTally++
        blueBox.innerText = blueTally
    } else if (currentColor == "green"){
        greenTally++
        greenBox.innerText = greenTally
    } else if (currentColor = "yellow") {
        yellowTally++
        yellowBox.innerText = yellowTally
    }
    
    colorFillOne()
    console.log(detectClearPhase())//run calculations function
    CPUMove()    

})

cardTwo.addEventListener("click", () => {
    let currentColor = cardTwo.style.backgroundColor
    if (currentColor == "red") {
        redTally++
        redBox.innerText = redTally
        console.log(calcRedTotal())
    } else if (currentColor == "blue") {
        blueTally++
        blueBox.innerText = blueTally
    } else if (currentColor == "green"){
        greenTally++
        greenBox.innerText = greenTally
    } else if (currentColor = "yellow") {
        yellowTally++
        yellowBox.innerText = yellowTally
    }

    colorFillTwo()
    //run calculations function
    CPUMove()
})

cardThree.addEventListener("click", () => {
    let currentColor = cardThree.style.backgroundColor
    if (currentColor == "red") {
        redTally++
        redBox.innerText = redTally
    } else if (currentColor == "blue") {
        blueTally++
        blueBox.innerText = blueTally
    } else if (currentColor == "green"){
        greenTally++
        greenBox.innerText = greenTally
        console.log()
    } else if (currentColor = "yellow") {
        yellowTally++
        yellowBox.innerText = yellowTally
    }
    
    colorFillThree()
    //run calculations function
    CPUMove()
    
   
})

cardFour.addEventListener("click", () => {
    let currentColor = cardFour.style.backgroundColor
    if (currentColor == "red") {
        redTally++
        redBox.innerText = redTally
        console.log(calcRedTotal())
    } else if (currentColor == "blue") {
        blueTally++
        blueBox.innerText = blueTally
    } else if (currentColor == "green"){
        greenTally++
        greenBox.innerText = greenTally
    } else if (currentColor = "yellow") {
        yellowTally++
        yellowBox.innerText = yellowTally
    }

    colorFillFour()
    //run calculations function
    CPUMove()

})

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
        return true
    } else {
        return false
    }

}

})


