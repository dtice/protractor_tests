var RegistrationPageObject = require("./RegistrationPageObject");

describe("Registration Page", function(){
    it("should take you home on successful login", function(){
        RegistrationPageObject.get();
        RegistrationPageObject.login("angular", "password");
        expect(element(by.css("div[ng-view]>h1")).getText()).toEqual("Home");
        RegistrationPageObject.logout();
    });

    it("should display an error message on login failure", function(){
        RegistrationPageObject.get();
        RegistrationPageObject.login("angular", "password1");
        expect(element(by.css("div[ng-if='Auth.error']")).isPresent()).toEqual(true);
    });
});