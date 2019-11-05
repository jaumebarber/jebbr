context('Editor', () => {
  it('publishes an article', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="articleTitle"]').type('New Article')
    
    cy.get('[data-testid="articleText"]').type('This is the text of the article')

    cy.get('[data-testid="publishButton"]').click()

    cy.get('[data-testid="articleTitle"]').should('have.value', '')

    cy.get('[data-testid="articleText"]').should('have.value', '')

    cy.contains('New Article')
  })
})
