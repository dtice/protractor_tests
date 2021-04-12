var WebTablesPageObject = require("./WebTablesPageObject");

describe("WebTables", function(){
    it("should have a user named 'admin' on load", function(){
        WebTablesPageObject.get();
        var adminRow = WebTablesPageObject.findUserRow('admin');
        expect(adminRow.$$("td").get(2).getText()).toEqual('admin');
    });

    it("should delete user when X is clicked on their row", function(){
        WebTablesPageObject.get();
        WebTablesPageObject.deleteUser('admin');
        var adminRow = WebTablesPageObject.findUserRow('admin');
        expect(adminRow.isPresent()).toEqual(false);
    });
});