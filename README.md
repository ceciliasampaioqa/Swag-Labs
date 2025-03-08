# Swag Labs - Test Automation

This project consists of a set of automated tests for the web application **Swag Labs**, a fictitious e-commerce used for testing purposes. It was developed to ensure the quality and reliability of the functionalities related to the purchase flow, from login to order completion.

# 🛠 **Technologies Used**

**JavaScript**: Main testing language.
**Cypress**: Testing framework for automating web applications.
**VS Code**: Code editor used in development.
**Node.js & npm**: Platform and package manager for running Cypress.

## 📂 **Project Structure**

📂 `cypress/e2e/` → Contains automated tests for the purchase flow, including:

- `login.cy.js` → Tests related to user login.
- `checkout.cy.js` → Tests of the checkout process.
- `logout.cy.js` → Tests of the logout functionality.
- `product-page.cy.js` → Tests to validate the display and interaction with products.
- `shopping-cart.cy.js` → Tests to add and remove products from the cart.

📂`cypress/support/` → Custom configurations and commands for the tests.
📂 `cypress.config.js` → Cypress configuration file.
📂`package.json` → List of project dependencies and scripts.

## ✅ **What was done**

✔ Setting up the test environment with **Cypress** and **Node.js**.<br>
✔ Automation of the purchase flow, covering login, adding products to the cart, checkout and logout.<br>
✔ Use of best practices such as **Commands.js** to facilitate test maintenance.<br>
✔ Implementation of tests that validate interface elements and business rules of the application.

## General Notes

- **Test Execution**: To run the tests, make sure to install the dependencies with `npm install` and run `npx cypress open` for the interactive mode of Cypress.
- **Test Coverage**: This project focuses on end-to-end testing of the purchase journey.
- **Future Improvements**: Implementation of test reports and continuous integration (CI/CD).

## 🤝 **Contribution**

Contributions are welcome! Feel free to open issues or send pull requests for improvements.
