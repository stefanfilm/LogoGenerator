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
        const expectedElement = `<circle cx="150" cy="100" r="80" fill="blue" />`
        const myCircle = new Circle("blue", "green", "UAA")
        expect(expectedElement).toEqual(myCircle.render())
    })
})

describe("triangle", () => {
    test("Should render triangle element", () => {
        const expectedElement = `<circle cx="150" cy="100" r="80" fill="blue" />`
        const myCircle = new Circle("blue", "green", "UAA")
        expect(expectedElement).toEqual(myCircle.render())
    })
})