describe("Product Page - GUI", () => {
  beforeEach(() => {
    cy.gui_login()
  })

  it("Displays product data: name, image, price and Add to cart button", () => {
    cy.get('[data-test="inventory-item-name"]').eq(0).should("not.be.empty")
    cy.get('[data-test="inventory-item-price"]').eq(0).should("not.be.empty")
    cy.get('img[class="inventory_item_img"]').eq(0).should("be.visible")
    cy.get('button[class="btn btn_primary btn_small btn_inventory "]').eq(0).should("be.visible")
  })

  it("Add to cart button adds the item to the cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
    cy.get('[data-test="shopping-cart-link"]').should("be.visible")
    cy.get('[data-test="shopping-cart-badge"]').contains("1")
  })

  it("Remove button removes the item from the cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible")
    cy.get('[data-test="shopping-cart-badge"]').contains("1")

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('[data-test="shopping-cart-link"]').should("be.visible")
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist")
  })
})
