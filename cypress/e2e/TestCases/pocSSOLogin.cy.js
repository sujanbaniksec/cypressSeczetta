/// <reference types="cypress" />
import dashboardPage from "../../integration/page/dashboardPage";

describe("Login with sso", () => {
  it("Login with sso", () => {
    cy.visit("https://automation.staging.iam2secz.com/");
    cy.get("#sso-login").click();

    cy.origin("https://login.microsoftonline.com/", () => {
      cy.get("#i0116").type("qatester1@seczetta.com");
      cy.get("#idSIButton9").click();
      cy.get("#i0118:nth-of-type(1)").type("S3cz377a#");
      cy.get("#idSIButton9").click();
      cy.get("#idBtn_Back").click();
    });
    const dashboard = new dashboardPage();

    //Click Create Vendor Workflow using POM dynamic xpath
    dashboard.createWorkflowDynamic("Create Vendor").click();
  });
});
