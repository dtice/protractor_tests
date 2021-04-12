var LandingPageObject = require("./LandingPageObject");

var WebTablesPageObject = function(){

    this.get = function(){
        LandingPageObject.get();
        LandingPageObject.clickWebTables();
    };

    // Returns tr containing `name` username
    this.findUserRow = function(name){
        return $$('table.smart-table tbody tr').filter(function(row){
            return row.$$("td").get(2).getText().then(function(rowName){
                return rowName === name;
            });
        });
    }

    this.deleteUser = function(name){
        var userRow = this.findUserRow(name);
        userRow.$$("td").last().$("button").click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable($$(".modal-footer button").get(1)), 5000);
        $$(".modal-footer button").get(1).click();
    }
}
module.exports = new WebTablesPageObject();