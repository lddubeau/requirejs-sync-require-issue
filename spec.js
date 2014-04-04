var requirejs = require('requirejs');

var localReq = requirejs.config({
    baseUrl: __dirname,
    context: "context1"
});

describe("context test", function () {
    it("should not throw error", function () {
        for (var i = 0; i < 1000; i++) {
            console.log(localReq("A"), i);
        }
    });
});
