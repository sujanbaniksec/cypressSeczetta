//Import of pages
/// <reference types="cypress" />
import { expect } from "chai";
//const login = require("../../integration/page/loginQASSOPage");
import cssSelectors from "../../support/cssSelectors";
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
      cy.get(cssSelectors.needAction).should("be.visible").click();
      cy.contains("Pending").wait(1000);
      cy.get(cssSelectors.requests).should("be.visible").click();
      cy.contains("date requested").wait(1000);
      //cy.get(cssSelectors.search).should("be.visible").type("Profile");
      cy.placeholder("Profile name").should("be.visible").type("Profile");
    });
  });
});
