const {
    Circle,
    Triangle,
    Square
} = require("./shape")

describe("circle", () => {
    test("Should render circle element", () => {
        const expectedElement = `<circle cx="150" cy="100" r="80" fill="blue" />`
        const myCircle = new Circle("blue", "green", "UAA")
        expect(expectedElement).toEqual(myCircle.render())
    })
})

describe("square", () => {
    test("Should render square element", () => {
        const expectedElement = `<rect x="90" y="40" width="120" height="120" fill="blue" />`
        const mySquare= new Square("blue", "green", "UAA")
        expect(expectedElement).toEqual(mySquare.render())
    })
})

describe("triangle", () => {
    test("Should render triangle element", () => {
        const expectedElement = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        const myTriangle = new Triangle("blue", "green", "UAA")
        expect(expectedElement).toEqual(myTriangle.render())
    })
})