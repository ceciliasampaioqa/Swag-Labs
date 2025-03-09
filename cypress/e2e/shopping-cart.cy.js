import { qase } from 'cypress-qase-reporter/mocha'

describe('Shopping Cart - GUI', () => {
  beforeEach(() => {
    cy.gui_login()
  })

  qase(9,
    it('Displays list of products inside the cart', () => {
      cy.addToCart()
      cy.goToCart()

      cy.get('[data-test="inventory-item"]').should('be.visible')
    })
  )
  qase(8,
    it('Access checkout page', () => {
      cy.addToCart()
      cy.goToCart()
      cy.startCheckout()

      cy.get('input[placeholder="First Name"]').should('be.visible')
      cy.get('input[placeholder="Last Name"]').should('be.visible')
      cy.get('input[placeholder="Zip/Postal Code"]').should('be.visible')
    })
  )
})
