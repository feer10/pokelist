describe('template spec', () => {
  it('Should test list and pagination', () => {
    cy.visit('/list')
    cy.get('.navigation__next').click()
    cy.get('td').should('contain', 'wigglytuff')
    cy.get('tbody tr').first().click()
    cy.get('.pokemon-detail__top-images-detail').find('img').should('have.attr', 'src').should('include', 'pokemon')
    cy.get('.back-list').click()
  })
})
