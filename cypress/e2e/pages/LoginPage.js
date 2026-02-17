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
      cy.wait(3000)
      this.visit();
      cy.wait(3000)
      this.inputUsername();
      cy.wait(1000)
      this.inputPassword();
      cy.wait(1000)
      this.clickLogin();
      cy.wait(3000)
      cy.url().should('not.include', 'login'); 
    });
  }
}

export default LoginPage;
