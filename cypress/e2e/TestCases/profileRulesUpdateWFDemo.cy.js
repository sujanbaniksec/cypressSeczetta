// <reference types="cypress" />
//Import of pages

import e2eProfileWFPage from "../../integration/page/e2eProfileWFPage";
import dynamicPage from "../../integration/objectRepo/dynamicPage";
import loginQASSOPage from "../../integration/page/loginQASSOPage";
//Assertion library
import { expect } from "chai";
import dashboardPage from "../../integration/page/dashboardPage";

/**
 * Hooks
 */

/**
 * Below Before each TC visit URL which can be defined as variable
 */
context("updateWFPermissionTestCases", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });
  let dynamic = new dynamicPage();
  let createProfile = new e2eProfileWFPage();
  let login = new loginQASSOPage();
  let dashboard = new dashboardPage();

  /**
   * TC1 User able to create profile and validate it existance
   */
  describe("Validate Permission Rules For Update WF", () => {
    it("Run And Validate Create Profile Including Update WF Rules", () => {
      /**
       * Login and create a profile with qa1 Admin user
       */

      login.logInAsQA1SSO();
      //Click Create ProfileE2EProfileService Workflow
      dynamic.liNormalizeText("Create ProfileE2EProfileService").click();
      //Map generated in createProfileE2EPage used to store the vendor variable information for use in the script
      let profileInfo = createProfile.enterProfileInfo();
      //Submit
      createProfile.submit().click();
      //advanced search for profile
      dynamic
        .inputNameValue("profile-search")
        .type(profileInfo.get("profileE2ETextField"));

      //uses dynamic xpath to click the profile in the advanced search dropdown
      dynamic.normalizeText(profileInfo.get("profileE2ETextField")).click();
      /**
       * validate Profile text attributes form data by iterating the vendor info map
       */
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextField")
        )
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextArea")
        )
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueOne(profileInfo.get("profileE2EDate"))
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ECheckBox")
        )
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ERadioBtn")
        )
      ).to.exist;
      expect(dynamic.spanTextOne(profileInfo.get("profileE2EAttachment"))).to
        .exist;
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2EDropDownThree")
        )
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueOne(profileInfo.get("profileE2Etags"))
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2EProfileSearchVendorName")
        )
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueTwo(
          profileInfo.get("profileE2EOwnerSelectQa2")
        )
      ).to.exist;
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2EContributorSelectQA2")
        )
      ).to.exist;
      //verify update  WF ProfileOwnerUpdateWFPermission and ProfileContributorUpdateWFPermission does not exist
      dynamic
        .liNormalizeText("ProfileOwnerUpdateWFPermission")
        .should("not.exist");
      dynamic
        .liNormalizeText("ProfileContributorUpdateWFPermission")
        .should("not.exist");
      //verify update  WF ProfileRolesUpdateWFPermission  exist
      dynamic.liNormalizeText("ProfileRolesUpdateWFPermission").should("exist");
      /**
       *TC2  Validate QA2 (contributor/owner) able to view & run update WF
       * I am an owner of Profile X AND owners have execute permission for Workflow Z
       * I am a contributor to Profile X AND contributors have execute permission for Workflow Z
       * I am a contributor to Profile X AND I have a role with execute permission for Workflow Z
       */

      //Logout
      login.logOut().click();
      //login as qa2 (general user roles)
      login.logInAsQA2SSO();
      // search and validate profile exist via profile type
      dynamic.liNormalizeText("profiles").click();
      dynamic.liNormalizeText("ProfileE2EProfileService").click();
      dynamic
        .inputNameValue("search")
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(5000);
      dashboard.firstRow().should("be.visible").click();

      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextField")
        )
      ).to.exist;
      /**
       * Verify updte WF "ProfileOwnerUpdateWFPermission" exist also click and update profile
       */
      dynamic
        .liNormalizeText("ProfileOwnerUpdateWFPermission")
        .should("exist")
        .click();

      // search and validate profile exist via profile type
      dynamic.liNormalizeText("profiles").click();
      dynamic.liNormalizeText("ProfileE2EProfileService").click();
      dynamic
        .inputNameValue("search")
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(5000);
      dashboard.firstRow().should("be.visible").click();

      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextField")
        )
      ).to.exist;
      //Verify text area updated
      expect(
        dynamic.editableDivContainsValueOne(
          "UpdatedProfileOwnerUpdateWFPermission"
        )
      ).to.exist;
      /**
       * Verify updte WF "ProfileContributorUpdateWFPermission" exist also click and update profile
       * Verify ProfileRolesUpdateWFPermission exist
       */
      dynamic.liNormalizeText("ProfileRolesUpdateWFPermission").should("exist");

      dynamic
        .liNormalizeText("ProfileContributorUpdateWFPermission")
        .should("exist")
        .click();

      // search and validate profile exist via profile type
      dynamic.liNormalizeText("profiles").click();
      dynamic.liNormalizeText("ProfileE2EProfileService").click();
      dynamic
        .inputNameValue("search")
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(5000);
      dashboard.firstRow().should("be.visible").click();

      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextField")
        )
      ).to.exist;
      //Verify text area updated
      expect(
        dynamic.editableDivContainsValueOne(
          "UpdatedProfileOwnerUpdateWFPermission"
        )
      ).to.exist;
      //Verify Check Box updated
      expect(dynamic.editableDivContainsValueOne("Two")).to.exist;

      //logout
      login.logOut().click();
      /**
       * TC2 Validate QA10 can not  access profile
       */
      //Login as qa10
      login.logInAsQA10SSO();

      //advanced search for profile
      dynamic
        .inputNameValue("profile-search")
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(2000);
      //Validate profile does not exist
      dynamic
        .normalizeText(profileInfo.get("profileE2ETextField"))
        .should("not.exist");
      //Navigate to Profile 2 via profile types
      //Click profile left nav
      dynamic.liNormalizeText("profiles").click();
      //Click profile type
      dynamic.liNormalizeText("ProfileE2EProfileService").click();
      //Search profile and validate
      dynamic
        .inputNameValue("search")
        .type(profileInfo.get("profileE2EProfileSearchVendorName"));

      cy.wait(5000);
      dashboard.firstRow().should("not.exist");

      //Logout
      login.logOut().click();
      /**
       * TC3 Set QA general user roles
       */

      //login
      login.logInAsQA1SSOReturn();
      //Search and add qa10 as contributor via role permisiion
      dynamic
        .inputNameValue("profile-search")
        .type(profileInfo.get("profileE2ETextField"));

      dynamic.normalizeText(profileInfo.get("profileE2ETextField")).click();
      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextField")
        )
      ).to.exist;
      dynamic.liNormalizeText("Contributors").click();
      dynamic.inputNameValue("user-role-search").type("QA_General");
      dynamic.liNormalizeText("QA_General_User").click();
      login.logOut().click();
      /**
       * TC4 Validate qa10 can view profile because of role permission
       * I have a role with access to Profile X AND I have a role with execute permission for Workflow Z
       */
      //Login as qa10
      login.logInAsQA10SSO();

      dynamic
        .inputNameValue("profile-search")
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(2000);

      dynamic.normalizeText(profileInfo.get("profileE2ETextField")).click();

      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextField")
        )
      ).to.exist;
      /**
       * Verify updte WF "ProfileRolesUpdateWFPermission" exist also click and update profile
       */
      dynamic
        .liNormalizeText("ProfileRolesUpdateWFPermission")
        .should("exist")
        .click();

      // search and validate profile exist via profile type
      dynamic.liNormalizeText("profiles").click();
      dynamic.liNormalizeText("ProfileE2EProfileService").click();
      dynamic
        .inputNameValue("search")
        .type(profileInfo.get("profileE2ETextField"));

      cy.wait(5000);
      dashboard.firstRow().should("be.visible").click();

      expect(
        dynamic.editableDivContainsValueOne(
          profileInfo.get("profileE2ETextField")
        )
      ).to.exist;
      //Verify Radio Btn updated
      expect(dynamic.editableDivContainsValueOne("Six")).to.exist;

      /**
       * TC6 Velidate qa10 can view profile2Validate with profile search ( enhanced permission validation)
       * */
      dynamic.liNormalizeText("ProfileE2EProfileSearch").click();
      dynamic.normalizeText("pending").should("be.visible").click();
      cy.contains("profile2Validate");
    });
  });
});
