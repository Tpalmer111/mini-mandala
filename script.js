console.log("Hello, from inside mini-mandala")

const compScoreBoard = document.querySelector(".CPU-score")
const fieldDiv = document.querySelector(".field")
const cardOne = document.querySelector(".card-one")
const cardTwo = document.querySelector(".card-two")
const cardThree = document.querySelector(".card-three")
const cardFour = document.querySelector(".card-four")
const playerScoreBoard = document.querySelector(".p1-score")



const colorPicker = () => {
    let num = Math.floor(Math.random() * 3)
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

// function colorPicker() {
//     let number = numPicker()
//     let cardColor = ""
//     if (number === 0) {
//         cardColor = "red"
//     } else if (number === 1) {
//         cardColor = "blue"
//     } else if (number === 2) {
//         cardColor = "green"
//     } else if (number === 3) {
//         cardColor = "yellow"
//     }
//     return cardColor
// }

//console.log(colorPicker)