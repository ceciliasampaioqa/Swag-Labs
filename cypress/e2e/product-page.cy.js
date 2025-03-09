import { qase } from 'cypress-qase-reporter/mocha'

describe("Product Page - GUI", () => {
  beforeEach(() => {
    cy.gui_login()
  })
  qase(6,
    it("Displays product data: name, image, price and Add to cart button", () => {
      cy.get('[data-test="inventory-item-name"]').eq(0).should("not.be.empty")
      cy.get('[data-test="inventory-item-price"]').eq(0).should("not.be.empty")
      cy.get('img[class="inventory_item_img"]').eq(0).should("be.visible")
      cy.get('button[class="btn btn_primary btn_small btn_inventory "]').eq(0).should("be.visible")
    })
  )
  qase(7,
    it("Add product to cart", () => {
      cy.addToCart()

      cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
      cy.get('[data-test="shopping-cart-link"]').should("be.visible")
      cy.get('[data-test="shopping-cart-badge"]').contains("1")
    })
  )
  qase(5,
    it("Remove product from cart", () => {
      cy.addToCart()

      cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
      cy.get('[data-test="shopping-cart-badge"]').contains("1")

      cy.removeFromCart()

      cy.get('[data-test="shopping-cart-link"]').should("be.visible")
      cy.get('[data-test="shopping-cart-badge"]').should("not.exist")
    })
  )
})
