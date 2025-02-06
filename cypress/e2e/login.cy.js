describe("Login - GUI", () => {
  //GUI: Graphical User Interface
  beforeEach(() => {
    cy.visit("/")
  })

  it("Login with valid credentials", () => {
    cy.get('input[placeholder="Username"]').type("standard_user")
    cy.get('input[placeholder="Password"]').type("secret_sauce")
    cy.get('input[name="login-button"]').click()

    cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
  })

  it("Displays error message with invalid password", () => {
    cy.get('input[placeholder="Username"]').type("standard_user")
    cy.get('input[placeholder="Password"]').type("wrong_password")
    cy.get('input[name="login-button"]').click()

    cy.get('[data-test="error"]')
      .contains("Epic sadface: Username and password do not match any user in this service")
      .should("be.visible")
  })

  it("Displays error message with invalid user", () => {
    cy.get('input[placeholder="Username"]').type("invalid_user")
    cy.get('input[placeholder="Password"]').type("secret_sauce")
    cy.get('input[name="login-button"]').click()

    cy.get('[data-test="error"]')
      .contains("Epic sadface: Username and password do not match any user in this service")
      .should("be.visible")
  })
})
