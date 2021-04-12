var LandingPage = function(){
    this.registrationButton = element(by.css(".linkbox a[href='http://www.way2automation.com/angularjs-protractor/registeration']"));
    this.webTablesButton = element(by.css(".linkbox a[href='http://www.way2automation.com/angularjs-protractor/webtables']"));

    this.get = function(){
        browser.ignoreSynchronization = true;
        browser.get("http://www.way2automation.com/protractor-angularjs-practice-website.html");
    };

    this.clickRegistration = function(){
        this.registrationButton.click();

        // Registration page is Angular, wait for it
        browser.ignoreSynchronization = false;

        // Switch to newly created tab
        browser.getAllWindowHandles().then(function(handles){
            browser.close();
            browser.switchTo().window(handles[1]);
        });
    };

    this.clickWebTables = function(){
        this.webTablesButton.click();

        // WebTables page is Angular, wait for it
        browser.ignoreSynchronization = false;

        // Switch to newly created tab
        browser.getAllWindowHandles().then(function(handles){
            browser.close();
            browser.switchTo().window(handles[1]);
        });
    }
}

module.exports = new LandingPage();