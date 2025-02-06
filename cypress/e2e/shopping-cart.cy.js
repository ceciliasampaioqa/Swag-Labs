describe('Shopping Cart - GUI', () => {
  beforeEach(() => {
    cy.gui_login()
  })
  it('Shopping cart page displays product listing', () => {
    cy.addToCart('sauce-labs-backpack')
    cy.goToCart()

    cy.get('[data-test="inventory-item"]').should('be.visible')
  })
  it('Checkout button redirects to the Checkout page: Your information', () => {
    cy.addToCart('sauce-labs-backpack')
    cy.goToCart()
    cy.get('[data-test="checkout"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
  })
})
