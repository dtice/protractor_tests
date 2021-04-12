var LandingPageObject = require("./LandingPageObject");

var RegistrationPageObject = function(){
    this.usernameInput = element(by.id("username"));
    this.passwordInput = element(by.id("password"));
    this.usernameDescInput = element(by.css("input[id*='formly_']"));
    this.submitButton = element(by.css("button[ng-click]"));
    this.logoutButton = element(by.css("a[href='#/login']"));

    this.get = function(){
        LandingPageObject.get();
        LandingPageObject.clickRegistration();
    }

    this.login = function(username, password){
        this.usernameInput.sendKeys(username);
        this.passwordInput.sendKeys(password);
        this.usernameDescInput.sendKeys(username);
        this.submitButton.click();
    }

    this.logout = function(){
        this.logoutButton.click();
    }
}

module.exports = new RegistrationPageObject();