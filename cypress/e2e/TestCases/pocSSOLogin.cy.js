/// <reference types="cypress" />

describe("Login with sso", () => {
  it("Login with sso", () => {
    cy.visit("https://automation.staging.iam2secz.com/");
    cy.get("#sso-login").click();

    cy.origin("https://login.microsoftonline.com/", () => {
      cy.get("#i0116").type("qatester1@seczetta.com");
      cy.get("#idSIButton9").click();
      cy.get("#i0118").type("S3cz377a#");
      cy.get("#idSIButton9").click();
      cy.get("#idBtn_Back").click();
    });
  });
});
