var LandingPage = function(){
    this.registrationButton = element(by.css(".linkbox a[href='http://www.way2automation.com/angularjs-protractor/registeration']"));
    this.webTablesButton = element(by.css(".linkbox a[href='http://www.way2automation.com/angularjs-protractor/webtables']"));

    this.get = function(){
        browser.ignoreSynchronization = true;
        browser.get("http://www.way2automation.com/protractor-angularjs-practice-website.html");
    };
}

module.exports = new LandingPage();