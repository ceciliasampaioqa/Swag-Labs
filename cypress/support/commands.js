Cypress.Commands.add('gui_login', () => {
  cy.visit('/')
  cy.get('input[placeholder="Username"]').type('standard_user')
  cy.get('input[placeholder="Password"]').type('secret_sauce')
  cy.get('input[name="login-button"]').click()
})

Cypress.Commands.add('addToCart', (productName) => {
  cy.get(`[data-test="add-to-cart-${productName}"]`).click()
})

Cypress.Commands.add('goToCart', () => {
  cy.get('[data-test="shopping-cart-link"]').click()
})

Cypress.Commands.add('startCheckout', () => {
  cy.get('[data-test="checkout"]').click()
  cy.url().should('include', '/checkout-step-one.html')
})

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, zipCode) => {
  cy.get('input[placeholder="First Name"]').type(firstName)
  cy.get('input[placeholder="Last Name"]').type(lastName)
  cy.get('input[placeholder="Zip/Postal Code"]').type(zipCode)
  cy.get('[data-test="continue"]').click()
})
