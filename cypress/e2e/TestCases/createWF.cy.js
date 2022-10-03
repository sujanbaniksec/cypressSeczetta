// <reference types="cypress" />
import dashboardPage from "../../integration/page/dashboardPage";
import createVendorRequestForm from "../../integration/page/createVendorRequestForm";
import loginPage from "../../integration/page/loginpage";
import { expect } from "chai";

context("profileTestCases", () => {
  beforeEach(() => {
    cy.visit("/");
    const login = new loginPage();
    //Login as system user
    login.loginAsSystemUser();
  });

  describe("Run Create Vendor WF to create a new profile", () => {
    it("Run Create Vendor WF to create a new profile", () => {
      const dashboard = new dashboardPage();
      const createVendor = new createVendorRequestForm();

      //Click Create Vendor Workflow using POM dynamic xpath
      dashboard.createWorkflowDynamic("Create Vendor").click();
      dashboard.vendorState.click();
      cy.xpath("(//*[@class='selectric'])[1]").click();
      cy.wait(50000);
    });
  });
});
