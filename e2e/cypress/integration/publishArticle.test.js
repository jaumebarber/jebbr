context('Editor', () => {
  it('publishes an article', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="title"]').type('New Article')

    cy.get('[data-testid="body"]').type('This is the body of the article')

    cy.get('[data-testid="publishButton"]').click()

    cy.get('[data-testid="title"]').should('have.value', '')

    cy.get('[data-testid="body"]').should('have.value', '')

    cy.contains('New Article')
  })
})
