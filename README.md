# Protractor Exercises

- Contains 3 different exercises for E2E automation using Protractor

# Exercises:

        1.
                a. Click `Registration` option
                b. Submit registration page with user `angular` password `password`
                c. Assert that one of the success page elements are displayed

        2.
                a. Click `Registration` option
                b. Submit registration page with user: `angular` password: `password1`
                c. Assert that the login failure message is displayed

        3.
                a. Click `WebTables` option
                b. In the table that appears, delete the user with username: `admin`
                c. On confirmation modal shown, click `Confirm`
                d. Verify user was deleted by asserting that the user does not exist
                   in the table


# To run all tests:
- run `protractor conf.js` in the project folder
