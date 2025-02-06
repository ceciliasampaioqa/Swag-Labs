const { faker } = require('@faker-js/faker')

describe('Checkout - GUI', () => {
  beforeEach(() => {
    cy.gui_login()
    cy.addToCart('sauce-labs-backpack')
    cy.goToCart()
  })

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const zipCode = faker.location.zipCode()

  it('Checkout page with required shipping information (first name, last name, zip code)', () => {
    cy.startCheckout()

    cy.get('input[placeholder="First Name"]').should('be.visible')
    cy.get('input[placeholder="Last Name"]').should('be.visible')
    cy.get('input[placeholder="Zip/Postal Code"]').should('be.visible')
  })

  it('Displays error message without filling in the First Name', () => {
    cy.startCheckout()

    cy.get('input[placeholder="Last Name"]').type(lastName)
    cy.get('input[placeholder="Zip/Postal Code"]').type(zipCode)
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').contains('Error: First Name is required').should('be.visible')
  })

  it('Displays error message without filling in the Last Name', () => {
    cy.startCheckout()

    cy.get('input[placeholder="First Name"]').type(firstName)
    cy.get('input[placeholder="Zip/Postal Code"]').type(zipCode)
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').contains('Error: Last Name is required').should('be.visible')
  })

  it('Displays error message without filling in the Zip Code', () => {
    cy.startCheckout()

    cy.get('input[placeholder="First Name"]').type(firstName)
    cy.get('input[placeholder="Last Name"]').type(lastName)
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').contains('Error: Postal Code is required').should('be.visible')
  })

  it('Redirect to checkout page: Overview and show products, taxes and total price', () => {
    cy.startCheckout()

    cy.fillCheckoutForm(firstName, lastName, zipCode)

    cy.get('[data-test="inventory-item"]').should('be.visible')
    cy.get('[data-test="tax-label"]').should('be.visible')
    cy.get('[data-test="total-label"]').should('be.visible')
  })

  it('Click on the Finish button, be redirected to Checkout:Complete and display confirmation message', () => {
    cy.startCheckout()

    cy.fillCheckoutForm(firstName, lastName, zipCode)
    cy.get('[data-test="finish"]').click()

    cy.url().should('include', '/checkout-complete.html')
    cy.get('h2').should('contain.text', 'Thank you for your order!')
    cy.get('[data-test="back-to-products"]').should('be.visible')
  })
})
