console.log("Hello, from inside mini-mandala")

addEventListener("DOMContentLoaded", () => {
    const compScoreBoard = document.querySelector(".CPU-score")
    const fieldDiv = document.querySelector(".field")
    const cardOne = document.querySelector(".card-one")
    const cardTwo = document.querySelector(".card-two")
    const cardThree = document.querySelector(".card-three")
    const cardFour = document.querySelector(".card-four")
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



colorFillOne()
colorFillTwo()
colorFillThree()
colorFillFour()

})




//  const pixels = document.querySelectorAll(".pixel")
//  pixels.forEach(pixel => {
//  pixel.addEventListener("mouseenter", () => {
//  pixel.style.backgroundColor = "black"
// })


