//Import of pages
import { expect } from "chai";
//const login = require("../../integration/page/loginQASSOPage");
import dynamicSelectors from "../../support/dynamicSelectors";
import loginQASSOPage from "../../integration/page/loginQASSOPage";
//const select = require("../../cypress/integration/objectRepo/dynamicSelectors.json");
//const select = require('../../fixtures/Selectors/dynamicSelectors.json')
/**
 * TC1
 */
context("dashboard", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });
  let login = new loginQASSOPage();
  describe("Navigate Dashboard", () => {
    it("Login and Navigate to dashboard", () => {
      login.logInAsQA1SSO();
      cy.contains("home").wait(1000);
      cy.get(dynamicSelectors.needAction).should("be.visible").click();
      cy.contains("Pending").wait(1000);
      cy.get(dynamicSelectors.requests).should("be.visible").click();
      cy.contains("date requested").wait(1000);
    });
  });
});
