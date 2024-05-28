const {
    Circle,
    Triangle,
    Square
} = require("./shape")

const myShape = new Triangle("blue", "white", "SUN")
const uniqueTag = myShape.render()
const svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${uniqueTag}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${myShape.textColor}">${myShape.text}</text>

</svg>`
console.log(svgText);