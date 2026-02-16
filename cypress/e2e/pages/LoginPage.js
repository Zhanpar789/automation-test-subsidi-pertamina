class LoginPage {
  visit() {
    cy.visit('/merchant-login');
  }

  inputUsername() {
    cy.get(':nth-child(1) > .mantine-InputWrapper-root > .mantine-Input-wrapper > [data-testid="input-component"]')
      .clear()
      .type(Cypress.env('USERNAME'));
  }

  inputPassword() {
    cy.get(':nth-child(2) > .mantine-InputWrapper-root > .mantine-Input-wrapper > [data-testid="input-component"]')
      .clear()
      .type(Cypress.env('PASSWORD'));
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }
  loginViaSession() {
    cy.session('merchant-session', () => {
      this.visit();
      this.inputUsername();
      this.inputPassword();
      this.clickLogin();
      cy.url().should('not.include', 'login'); 
    });
  }
}

export default LoginPage;
