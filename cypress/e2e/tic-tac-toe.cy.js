it('starts a new game', () => {
  cy.visit('localhost:3000'); // Assuming the app is served at the root path
  cy.get('.game-board .square').should('have.length', 9);
  cy.get('.game-board .square').should('not.have.text'); // All squares are empty
  cy.get('.game-board .status').should('contain', 'Next player : X');
});


