import { qase } from 'cypress-qase-reporter/mocha'

describe("Login - GUI", () => {
  //GUI: Graphical User Interface

  qase(2,
    it("Login with valid credentials", () => {
      cy.gui_login()

      cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
    })
  )
  qase(1,
    it("Displays error message with invalid password", () => {
      const username = "standard_user"
      const password = "wrong_password"

      cy.gui_login(username, password)

      cy.get('[data-test="error"]')
        .contains("Epic sadface: Username and password do not match any user in this service")
        .should("be.visible")
    })
  )
  qase(3,
    it("Displays error message with invalid user", () => {
      const username = "invalid_user"
      const password = "secret_sauce"

      cy.gui_login(username, password)

      cy.get('[data-test="error"]')
        .contains("Epic sadface: Username and password do not match any user in this service")
        .should("be.visible")
    })
  )
  qase(4,
    it('Performs user logout', () => {
      cy.gui_login()

      cy.gui_logout()

      cy.url().should('eq', 'https://www.saucedemo.com/')
      cy.get('input[name="login-button"]').should('be.visible')
    })
  )
})
