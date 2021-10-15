const auth = require("./auth")
// @ponicode
describe("auth.default", () => {
    test("0", () => {
        let callFunction = () => {
            auth.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
