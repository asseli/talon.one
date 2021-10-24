/// <reference types="cypress" />

describe('IMDb page', () => {
  const movieName = 'The Green Mile';

  it('checks the search on the IMDb page', () => {
      cy.visit('/');

      // gets the search bar element, types the movie name, enters it, 
      // and checks that the search bar has the movie name in it
      cy.get('#suggestion-search')
        .type(`${movieName}{enter}`)
        .should('have.value', movieName);

      // checks that page has some results
      cy.get('.findNoResults').should('not.exist');
      cy.get('.findSection').should('exist');

      // clicks on the first search result
      cy.get('.result_text a').first().click();
      // checks the correct movie page is opened
      cy.contains(movieName);
  })
});
