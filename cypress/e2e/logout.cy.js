describe('Logout - GUI', () => {
  beforeEach(() => {
    cy.gui_login()
  })
  it('Logout button in the menu should end the user session and redirect him to the login page', () => {
    cy.get('button[id="react-burger-menu-btn"]').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

    cy.get('input[name="login-button"]').should('be.visible')
  })
})
