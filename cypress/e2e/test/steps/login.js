import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given("user open login page", () => {
  loginPage.visit();
});

When("user login with valid credential", () => {
  cy.wait(1000);
  loginPage.inputUsername();
  cy.wait(1000);
  loginPage.inputPassword();
  cy.wait(1000);
  loginPage.clickLogin();
  cy.wait(1000);
});

Then("user successfully login", () => {
  cy.url().should("not.include", "login");
});
