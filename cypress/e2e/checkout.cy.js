import { qase } from 'cypress-qase-reporter/mocha'
const { faker } = require('@faker-js/faker')

describe('Checkout - GUI', () => {
  beforeEach(() => {
    cy.gui_login()
    cy.addToCart()
    cy.goToCart()
  })

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const zipCode = faker.location.zipCode()
  qase(10,
    it('Displays error message when not filling in "First Name" field in form', () => {
      cy.startCheckout()

      cy.get('input[placeholder="Last Name"]').type(lastName)
      cy.get('input[placeholder="Zip/Postal Code"]').type(zipCode)
      cy.get('[data-test="continue"]').click()

      cy.get('[data-test="error"]').contains('Error: First Name is required').should('be.visible')
    })
  )

  qase(13,
    it('Displays error message when not filling in "Last Name" field in form', () => {
      cy.startCheckout()

      cy.get('input[placeholder="First Name"]').type(firstName)
      cy.get('input[placeholder="Zip/Postal Code"]').type(zipCode)
      cy.get('[data-test="continue"]').click()

      cy.get('[data-test="error"]').contains('Error: Last Name is required').should('be.visible')
    })
  )
  qase(14,
    it('Displays error message when not filling in "Zip/Postal Code" field in form', () => {
      cy.startCheckout()

      cy.get('input[placeholder="First Name"]').type(firstName)
      cy.get('input[placeholder="Last Name"]').type(lastName)
      cy.get('[data-test="continue"]').click()

      cy.get('[data-test="error"]').contains('Error: Postal Code is required').should('be.visible')
    })
  )
  qase(11,
    it('Access the checkout page', () => {
      cy.startCheckout()

      cy.fillCheckoutForm(firstName, lastName, zipCode)

      cy.get('[data-test="inventory-item"]').should('be.visible')
      cy.get('[data-test="tax-label"]').should('be.visible')
      cy.get('[data-test="total-label"]').should('be.visible')
    })
  )
  qase(12,
    it('Click on the Finish button, be redirected to Checkout:Complete and display confirmation message', () => {
      cy.startCheckout()

      cy.fillCheckoutForm(firstName, lastName, zipCode)
      cy.get('[data-test="finish"]').click()

      cy.url().should('include', '/checkout-complete.html')
      cy.get('h2').should('contain.text', 'Thank you for your order!')
      cy.get('[data-test="back-to-products"]').should('be.visible')
    })
  )
})
