import e2e from '../../../../libs/e2e';

describe('Servers list', () => {
  beforeEach(() => cy.visit('http://localhost:4200/login'));

  it('should fail as username and password are incorrect and should show error message', () => {
    cy.get(e2e.LoginUserInput).type('recep');
    cy.get(e2e.LoginPasswordInput).type('burak');
    cy.get(e2e.LoginSubmitButton).click();
    cy.get(e2e.LoginErrorMessage, { timeout: 20000 }).should('exist');
  });
});
