# Swag Labs Automated Testing Suite 🚀

[![Cypress Version](https://img.shields.io/badge/Cypress-14.0.2-brightgreen)](https://www.cypress.io/)
[![Qase.io Integration](https://img.shields.io/badge/Qase.io-2.0-blue)](https://qase.io)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-✔-success)](https://github.com/features/actions)

A scalable and maintainable test automation framework for the **[Swag Labs](https://www.saucedemo.com/)** e-commerce platform. This project validates critical user journeys, integrates with Qase.io for test management, and demonstrates CI/CD readiness with GitHub Actions.

---

## 📋 Project Overview

This repository contains automated tests for **Swag Labs**, covering end-to-end scenarios from login to checkout. Built with Cypress and integrated with Qase.io, the framework emphasizes:

- **Reusable custom commands** for efficient test scripting.
- **Real-time reporting** via `cypress-qase-reporter`.
- **CI/CD pipelines** for automated test execution.
- **Modular architecture** aligned with Custom Commands best practices.

---

## 🛠️ Technical Stack

- **Automation Framework**: Cypress (JavaScript)
- **Test Management**: Qase.io
- **CI/CD**: GitHub Actions
- **Reporting**: Synchronized test runs with Qase.io
- **Design Pattern**: Custom Commands

---

## 📂 Project Structure

📂`cypress/e2e/` → Contains automated tests for the purchase flow, including:

- `login.cy.js` → Tests related to user login.
- `checkout.cy.js` → Tests of the checkout process.
- `logout.cy.js` → Tests of the logout functionality.
- `product-page.cy.js` → Tests to validate the display and interaction with products.
- `shopping-cart.cy.js` → Tests to add and remove products from the cart.

📂`cypress/support/` → Custom configurations and commands for the tests.<br>
📂`cypress.config.js` → Cypress configuration file.<br>
📂`package.json` → List of project dependencies and scripts.

---

## ⚙️ Setup & Execution

### Prerequisites

- Node.js ≥ 20.x
- To develop this task, a test management tool called QASE was used. To access the platform you will need to click on the following link and use these credentials:
  - Qase.io ([Access Here](https://qase.io))
  - E-mail: ceciliaqa.saucedemo@gmail.com
  - Password: Teste@12345!
  - Additionally, in the "Test runs" section you will find test runs for the developed test cases. There you will be able to see a demonstration of what a successful and failed test run would look like.

### Installation

✔ Clone the repository and Install dependencies:

```bash
git clone https://github.com/ceciliasampaioqa/Swag-Labs.git
cd Swag-Labs
npm install
```

### Execution

✔ Use the commands below according to your need:

```bash
npm run test #Run tests in Cypress interactive mode
npm run test:headless #Run tests in Cypress headless mode
npm run test:qase #Run tests in Cypress headless mode and Generate reports in Qase.io
```
