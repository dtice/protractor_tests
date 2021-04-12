exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['LandingPageTests.js', 'RegistrationPageTests.js', 'WebTablesPageTests.js']
}