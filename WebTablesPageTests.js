var WebTablesPageObject = require("./WebTablesPageObject");

describe("WebTables", function(){
    it("should have a user named 'admin' on load", function(){
        WebTablesPageObject.get();
        expect(WebTablesPageObject.userExists('admin')).toEqual(true);
    });
});