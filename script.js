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


colorFillOne()
colorFillTwo()
colorFillThree()
colorFillFour()

const CPUMove = () => {
    let CPUColor = colorPicker()
    if (CPUColor == "red") {
        redTally++
        redBox.innerText = redTally
    } else if (CPUColor == "blue") {
        blueTally++
        blueBox.innerText = blueTally
    } else if (CPUColor == "green"){
        greenTally++
        greenBox.innerText = greenTally
    } else if (CPUColor = "yellow") {
        yellowTally++
        yellowBox.innerText = yellowTally
    }
}

cardOne.addEventListener("click", () => {
    let currentColor = cardOne.style.backgroundColor
    if (currentColor == "red") {
        redTally++
        redBox.innerText = redTally
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
    
    CPUMove()
    
    colorFillOne()


    

})

cardTwo.addEventListener("click", () => {
    let currentColor = cardTwo.style.backgroundColor
    if (currentColor == "red") {
        redTally++
        redBox.innerText = redTally
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

  
    CPUMove()

    colorFillTwo()
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
    } else if (currentColor = "yellow") {
        yellowTally++
        yellowBox.innerText = yellowTally
    }
    
    CPUMove()

    colorFillThree()
})

cardFour.addEventListener("click", () => {
    let currentColor = cardFour.style.backgroundColor
    if (currentColor == "red") {
        redTally++
        redBox.innerText = redTally
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
  
    CPUMove()

    colorFillFour()


})



})





    // console.log("red = " + redTally)
    // console.log("blue = " + blueTally)
    // console.log("green + " + greenTally)
    // console.log("yellow = " + yellowTally)
