var Appsee = require("nativescript-appsee").Appsee;
var appsee = new Appsee();

describe("greet function", function() {
    it("exists", function() {
        expect(appsee.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(appsee.greet()).toEqual("Hello, NS");
    });
});