//Import of pages
import { expect } from "chai";
const login = require("../../integration/page/loginQASSOPage");
const select = require("../../cypress/integration/objectRepo/dynamicSelectors.json");
//const select = require('../../fixtures/Selectors/dynamicSelectors.json')
/**
 * TC1
 */
context("dashboard", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });
  describe("Navigate Dashboard", () => {
    it("Login and Navigate to dashboard", () => {
      login.logInAsQA1SSO();
      cy.get(select.needAction).click;
      cy.contains("Pending").wait(1000);
      cy.get(select.requests).click;
      cy.contains("date requested").wait(1000);
    });
  });
});
