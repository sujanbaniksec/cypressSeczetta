// <reference types="cypress" />
import dashboardPage from "../../integration/page/dashboardPage";
import createVendorRequestForm from "../../integration/page/createVendorRequestForm";
import loginPage from "../../integration/page/loginpage";
import { expect } from "chai";

context("profileTestCases", () => {
  beforeEach(() => {
    //cy.visit(Cypress.env("automation_staging_url"));
    cy.visit(Cypress.env("url"));
    //cy.visit(Cypress.env("automation_staging_url").baseUrl);
    //cy.visit("/");

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
      let vendorInfo = createVendor.enterVendorInfo();
      //Submit
      createVendor.submit().click();
      //search for vendor name
      dashboard.advancedSearchProfileName().type(vendorInfo.get("vendorName"));
      //uses dynamic xpath to click the Vendor Name in the advanced search dropdown
      dashboard.dynamic(vendorInfo.get("vendorName")).click();
      vendorInfo.forEach(function (key, val) {
        expect(dashboard.dynamic(key)).to.exist;
      });
      //expect(dashboard.dynamic(vendorInfo.get("vendorCity"))).to.exist;
      /*
    for (let value of vendorInfo.values()){
      expect(dashboard.dynamic(vendorInfo.get(vendorInfo.values))).to.exist
    }
    */
    });
  });
});
