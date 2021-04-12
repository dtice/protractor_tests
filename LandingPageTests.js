var LandingPageObject = require("./LandingPageObject");

describe("Landing Page", function(){
    it("should have a clickable Registration button", function(){
        LandingPageObject.get();
        LandingPageObject.registrationButton.click();
        expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    });

    it("should have a clickable WebTables button", function(){
        LandingPageObject.get();
        LandingPageObject.webTablesButton.click();
        expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/webtables/");
    });
});