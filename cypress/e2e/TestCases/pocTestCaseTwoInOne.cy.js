// <reference types="cypress" />
import dashboardPage from "../../integration/page/dashboardPage";
import createVendorRequestForm from "../../integration/page/createVendorRequestForm";
import loginPage from "../../integration/page/loginpage";
import profileDashboard from "../../integration/page/profileDashboard";
import leftNavDashboard from "../../integration/page/leftNavDashboard";
import { expect } from "chai";

/**
 * Hooks
 */

/**
 * Below Before each TC lgin steps
 */
context("profileTestCases", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));

    const login = new loginPage();
    //Login as system user
    login.loginAsSystemUser();
  });
  /**
   * TC1 Create a peofile with create vendor WF
   */
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
      expect(dashboard.dynamic(vendorInfo.get("vendorCity"))).to.exist;
      /*
    for (let value of vendorInfo.values()){
      expect(dashboard.dynamic(vendorInfo.get(vendorInfo.values))).to.exist
    }
    */
    });
  });

  /**
   * TestCase2
   *The basic test below can be modeled for any API work needed as it makes a call, captures a response and does
   *quick validation of the response.Next, we log into the UI and assert that the newly created profile is visible in UI
   *All hardcoded data will eventually be parameterized and called from an env profile config page of some sort
   */
  describe("Create a profile via API", function () {
    it("Post to create a profile of an existing profile type on autmation.dev", function () {
      let unique = Date.now();
      let apiProfile = "API_Profile" + unique;
      cy.request({
        method: "POST",

        url: Cypress.env("url") + "api/profile",
        body: {
          profile: {
            profile_type_id: Cypress.env("profile_type_id"),
            name: apiProfile,
            status: "1",
          },
        },
        headers: {
          accept: "application/json",
          authorization: "Token token=" + Cypress.env("token"),
        },
      }).then((r) => {
        //console.log(r.body);
        expect(r.status).to.eq(201);
        expect(r.body.profile.name).to.eq(apiProfile);
      });
      //Create instances of the page classes for use in the tests

      const dashboard = new dashboardPage();
      const createVendor = new createVendorRequestForm();
      const profilesLink = new leftNavDashboard();
      const profileType = new profileDashboard();

      //Click Profiles Left Nav
      profilesLink.clickLeftNavLink("profiles");
      //Click API tab
      profileType.clickProfileDashboard("API");
      cy.wait(1000);
      //Search for newly created profile
      profileType.profileSearch().type(apiProfile);
      cy.wait(1000);
      //Click top row of table
      profileType.topRowTable().click();
      //contains works in place of xpath when you just need to verify text and are sure it only appears once on page
      cy.contains(apiProfile);
    });
  });
});
