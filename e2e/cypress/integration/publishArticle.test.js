context('Editor', () => {
  it('publishes an article', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="editorText"]').type('New Article')

    cy.get('[data-testid="publishButton"]').click()

    cy.get('[data-testid="editorText"]').should('have.value', '')

    cy.contains('New Article')
  })
})