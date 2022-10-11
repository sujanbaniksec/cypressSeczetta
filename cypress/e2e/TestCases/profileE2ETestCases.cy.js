// <reference types="cypress" />
//Import of pages
import dashboardPage from "../../integration/page/dashboardPage";
import createProfileE2EPage from "../../integration/page/createProfileE2EPage";
import loginPage from "../../integration/page/loginpage";
import loginQASSOPage from "../../integration/page/loginQASSOPage";
//Assertion library
import { expect } from "chai";
//describe() is used to group test cases...ie Profile Test, Portal Test,Update WF Test
//multiple test can be nested under a describe
//it() is used for individual test cases... the string explains what test should do
//the function is the test itself
/**
 * Hooks
 */

/**
 * Below Before each TC lgin steps
 */
context("profileTestCases", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });
  let dashboard = new dashboardPage();
  let createProfile = new createProfileE2EPage();
  let login = new loginQASSOPage();
  //TC1
  describe("Create Profiles And Validate Values", () => {
    it("Run And Validate Create Profile E2E Workflow", () => {
      //page objects for use in test
      // let dashboard = new dashboardPage();
      // let createProfile = new createProfileE2EPage();
      // let login = new loginQASSOPage();
      //Login as QA1SSO
      login.logInAsQA1SSO();

      //Click Create ProfileE2EProfileService Workflow using dynamic xpath
      dashboard
        .createWorkflowDynamic("Create ProfileE2EProfileService")
        .click();
      //Map generated in createProfileE2EPage used to store the vendor variable information for use in the script
      let profileInfo = createProfile.enterProfileInfo();

      //Submit
      createProfile.submit().click();

      //advanced search for vendor name
      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));
      //uses dynamic xpath to click the Vendor Name in the advanced search dropdown
      dashboard.dynamic(profileInfo.get("profileE2ETextField")).click();

      //validate Profile text attributes form data by iterating the vendor info map
      //and plugging in the key value to the dynamic xpath
      /*
    profileInfo.forEach(function (key, val) {
    expect(dashboard.dynamic(key)).to.exist;
    });
 */
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ETextField"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ETextArea"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2EDate"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ECheckBox"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ERadioBtn"))).to
        .exist;
      expect(dashboard.dynamicSpan(profileInfo.get("profileE2EAttachment"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2EDropDownThree")))
        .to.exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2Etags"))).to
        .exist;
      expect(
        dashboard.dynamicValue(
          profileInfo.get("profileE2EProfileSearchVendorName")
        )
      ).to.exist;
      expect(
        dashboard.dynamicValueTwo(profileInfo.get("profileE2EOwnerSelectQa2"))
      ).to.exist;
      expect(
        dashboard.dynamicValue(
          profileInfo.get("profileE2EContributorSelectQA2")
        )
      ).to.exist;
      //Logout
      dashboard.logOut().click();

      /*
Verify QA5 contributor 
      */
      login.logInAsQA2SSO();

      //Validate via profile Table
      dashboard.createWorkflowDynamic("profiles").click();
      dashboard.createWorkflowDynamic("ProfileE2EProfileService").click();
      dashboard
        .searchProfileName()
        .type(profileInfo.get("profileE2ETextField"));
      //uses dynamic xpath to click the Vendor Name in the advanced search dropdown
      cy.wait(5000);
      dashboard.firstRow().should("be.visible").click();

      //validate Profile text attributes form data by iterating the vendor info map

      expect(dashboard.dynamicValue(profileInfo.get("profileE2ETextField"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ETextArea"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2EDate"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ECheckBox"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ERadioBtn"))).to
        .exist;
      expect(dashboard.dynamicSpan(profileInfo.get("profileE2EAttachment"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2EDropDownThree")))
        .to.exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2Etags"))).to
        .exist;
      expect(
        dashboard.dynamicValue(
          profileInfo.get("profileE2EProfileSearchVendorName")
        )
      ).to.exist;
      expect(
        dashboard.dynamicValueTwo(profileInfo.get("profileE2EOwnerSelectQa2"))
      ).to.exist;
      expect(
        dashboard.dynamicValue(
          profileInfo.get("profileE2EContributorSelectQA2")
        )
      ).to.exist;

      /*
Verify QA10 unable to see profile
      */
      //Logout
      dashboard.logOut().click();
      login.logInAsQA10SSO();
      //advanced search for vendor name
      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));
      //uses dynamic xpath to click the Vendor Name in the advanced search dropdown
      dashboard
        .dynamic(profileInfo.get("profileE2ETextField"))
        .should("not.exist");
    });
  });
  /*
  //TC2 validate
  describe("Validate Contributor Can view profile", () => {
    it("Validate Contributor QA5 Can view profile", () => {
      //page objects for use in test
      //    let dashboard = new dashboardPage();
      //   let login = new loginQASSOPage();
      //   let createProfile = new createProfileE2EPage();
      cy.wait(500);
      //Login as QA1SSO
      login.logInAsQA5SSO();

      let profileInfo = createProfile
        .enterProfileInfo()
        .get("profileE2ETextField");
      //advanced search for vendor name
      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));
      //uses dynamic xpath to click the Vendor Name in the advanced search dropdown
      dashboard.dynamic(profileInfo.get("profileE2ETextField")).click();

      expect(dashboard.dynamicValue(profileInfo.get("profileE2ETextField"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ETextArea"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2EDate"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ECheckBox"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ERadioBtn"))).to
        .exist;
      expect(dashboard.dynamicSpan(profileInfo.get("profileE2EAttachment"))).to
        .exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2EDropDownThree")))
        .to.exist;
      expect(dashboard.dynamicValue(profileInfo.get("profileE2Etags"))).to
        .exist;
      expect(
        dashboard.dynamicValue(
          profileInfo.get("profileE2EProfileSearchVendorName")
        )
      ).to.exist;
      expect(
        dashboard.dynamicValueTwo(profileInfo.get("profileE2EOwnerSelectQa2"))
      ).to.exist;
      expect(
        dashboard.dynamicValue(
          profileInfo.get("profileE2EContributorSelectQA2")
        )
      ).to.exist;
    });
  });

  */
});
