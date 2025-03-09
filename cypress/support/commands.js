Cypress.Commands.add('gui_login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/')
  cy.get('input[placeholder="Username"]').type(username)
  cy.get('input[placeholder="Password"]').type(password)
  cy.get('input[name="login-button"]').click()
})

Cypress.Commands.add('gui_logout', () => {
  cy.get('button[id="react-burger-menu-btn"]').click()
  cy.get('[data-test="logout-sidebar-link"]').click()
})

Cypress.Commands.add('addToCart', () => {
  cy.get(`[data-test="add-to-cart-sauce-labs-backpack"]`).click()
})

Cypress.Commands.add('removeFromCart', () => {
  cy.get('[data-test="remove-sauce-labs-backpack"]').click()
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
