const {
    Circle,
    Triangle,
    Square
} = require("./lib/shape")
const {writeFile} = require("fs/promises")


const inquirer = require("inquirer");

function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(), fileName), data)    
}

const questions = [
    { type: "input",
    name: "text",
    message: "What is your project text?",
},
{ type: "input",
    name: "textColor",
    message: "What is your project text color?"
},
{ type: "list",
    name: "shape",
    message: "What would you like your shape to be?",
    choices: ["circle", "square", "triangle"]
},
{ type: "input",
    name: "shapeColor",
    message: "What would you like your shape color to be?"
},
]

function userInput () {
inquirer.prompt(questions).then(({text, textColor, shape, shapeColor}) => {
let shapeObject;
if (shape == "circle"){
    shape= new Circle (shapeColor, textColor, text)
}
else if (shape== "square") {
    shape = new Square (shapeColor, textColor, text)
}

else {
    shape = new Triangle (shapeColor, textColor, text)
}
const svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>

</svg>`
writeFile ("logo.svg", svgText).then(() => console.log("generated SVG successful"))
})}

const renderSvg = async () => {
    const text = await userInput()
    console.log(text)
    writeFile ("logo.svg", text).then(() => console.log("generated SVG successful"))
}

// renderSvg()
userInput()