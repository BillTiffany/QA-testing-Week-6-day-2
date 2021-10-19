const{returnTwo, greeting, add, subtract, divide, multiply} = require('./functions')

test("Should return the number (2)", () => {
    expect(returnTwo()).toEqual(2)
})

it("should return the greeting hello {name}", ()=>{
    expect(greeting("Bill")).toEqual(`Hello Bill`)
})

describe("Math", () => {

    test("Should return the math of the numbers provided", () => {
        expect(add(5, 6)).toEqual(11)
        expect(multiply(5, 6)).toEqual(30)
        expect(divide(10,5)).toEqual(2)
        expect(subtract (6,4)).toEqual(2)
    })
    
    // it("Should return the multiple of the two numbers", () => {
    //     expect(multiply(5, 6)).toEqual(30)
    // })
    
    // it("Should return num1 divided by num2", () => {
    //     expect(divide(10, 5)).toEqual(2)
    // })
    
    // it("Should return num1 minus num2", () => {
    //     expect(subtract(6, 4)).toEqual(2)
    // })
    
    })