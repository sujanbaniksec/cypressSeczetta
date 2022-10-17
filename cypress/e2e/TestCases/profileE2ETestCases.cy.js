// <reference types="cypress" />
//Import of pages
import dashboardPage from "../../integration/page/dashboardPage";
import createProfileE2EPage from "../../integration/page/createProfileE2EPage";
import loginQASSOPage from "../../integration/page/loginQASSOPage";
//Assertion library
import { expect } from "chai";

/**
 * Hooks
 */

/**
 * Below Before each TC visit url
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
      /**
       * Login and create a profile with qa1 Admin user
       */

      login.logInAsQA1SSO();
      //Click Create ProfileE2EProfileService Workflow
      dashboard
        .createWorkflowDynamic("Create ProfileE2EProfileService")
        .click();
      //Map generated in createProfileE2EPage used to store the vendor variable information for use in the script
      let profileInfo = createProfile.enterProfileInfo();
      //Submit
      createProfile.submit().click();
      //advanced search for profile
      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));
      //uses dynamic xpath to click the profile in the advanced search dropdown
      dashboard.dynamic(profileInfo.get("profileE2ETextField")).click();
      /**
       * validate Profile text attributes form data by iterating the vendor info map
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
      /**
       * Validate QA10 unable to see 2 profile
       */

      //Logout
      dashboard.logOut().click();
      login.logInAsQA10SSO();

      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(2000);
      dashboard
        .dynamic(profileInfo.get("profileE2ETextField"))
        .should("not.exist");

      dashboard.createWorkflowDynamic("profiles").click();
      dashboard.createWorkflowDynamic("ProfileE2EProfileService").click();
      dashboard
        .searchProfileName()
        .type(profileInfo.get("profileE2EProfileSearchVendorName"));

      cy.wait(5000);
      dashboard.firstRow().should("not.exist");

      //Logout
      dashboard.logOut().click();
      /**
       * Validate QA2 can access profile as contributor
       */
      login.logInAsQA2SSO();

      dashboard.createWorkflowDynamic("profiles").click();
      dashboard.createWorkflowDynamic("ProfileE2EProfileService").click();
      dashboard
        .searchProfileName()
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(5000);
      dashboard.firstRow().should("be.visible").click();

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
      dashboard.logOut().click();
      /**
       * Add QA general user as contributor with qa1
       */

      login.logInAsQA1SSOReturn();

      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));

      dashboard.dynamic(profileInfo.get("profileE2ETextField")).click();
      expect(dashboard.dynamicValue(profileInfo.get("profileE2ETextField"))).to
        .exist;
      dashboard.createWorkflowDynamic("Contributors").click();
      dashboard.dynamicSearchName("user-role-search").type("QA_General");
      dashboard.createWorkflowDynamic("QA_General_User").click();
      dashboard.logOut().click();
      /**
       * Validate qa10 can view profile
       */
      login.logInAsQA10SSO();

      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(2000);

      dashboard
        .advancedSearchProfileName()
        .type(profileInfo.get("profileE2ETextField"));

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

      /**
       * Velidate qa10 can view profile2Validate with profile search
       * */
      dashboard.createWorkflowDynamic("ProfileE2EProfileSearch").click();
      dashboard.dynamic("pending").should("be.visible").click();
      cy.contains("profile2Validate");
    });
  });
});
