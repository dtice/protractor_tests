var LandingPageObject = require("./LandingPageObject");

var WebTablesPageObject = function(){

    this.get = function(){
        LandingPageObject.get();
        LandingPageObject.clickWebTables();
    };
    
    this.deleteUser = function(name){
        return $$('table.smart-table tr').filter(function(row) {
            // Get the third column's text.
            return row.$$('td').get(3).getText().then(function(rowName) {
                // Filter rows matching the name we are looking for.
                return rowName === name;
            });
        }).then(function(rows) {
            // This is an array. Find the button in the row and click on it.
            rows[0].$('button[ng-click="delUser()"]').click();
        });
    };
    
    // Returns true if the user exists, false otherwise
    this.userExists = function(name){
        var userExists = false;
        $$(".table.smart-table tr").filter(function(row) {
            return row.$$('td').get(3).getText().then(function(rowName){
                return rowName == name;
            });
        }).then(function(rows){
            if(rows.length > 0) userExists = true;
        });
        return userExists;
    };
}
module.exports = new WebTablesPageObject();