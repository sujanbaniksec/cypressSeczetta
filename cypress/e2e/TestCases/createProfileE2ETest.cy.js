// <reference types="cypress" />
//Import of pages
import dashboardPage from "../../integration/page/dashboardPage";
import createProfileE2EPage from "../../integration/page/createProfileE2EPage";
import loginPage from "../../integration/page/loginpage";
import loginQA1SSOPage from "../../integration/page/loginQA1SSOPage";
//Assertion library
import { expect } from "chai";
//describe() is used to group test cases...ie Profile Test, Portal Test,Update WF Test
//multiple test can be nested under a describe
//it() is used for individual test cases... the string explains what test should do
//the function is the test itself
describe("Create Profiles", () => {
  it("Runs Create Profile E2E Workflow", () => {  
    cy.visit("https://automation.staging.iam2secz.com/");
    //page objects for use in test
    let dashboard = new dashboardPage();
    let createProfile = new createProfileE2EPage();
    let login = new loginQA1SSOPage();
    //Login as QA1SSO
    login.logInAsQA1SSO();

    //Click Create ProfileE2EProfileService Workflow using dynamic xpath
    dashboard.createWorkflowDynamic("Create ProfileE2EProfileService").click();
    //Map generated in createProfileE2EPage used to store the vendor variable information for use in the script
    let profileInfo = createProfile.enterProfileInfo();

    //Submit
    createProfile.submit().click();
    
    //advanced search for vendor name
   dashboard.advancedSearchProfileName().type(profileInfo.get("profileE2ETextField"));
    //uses dynamic xpath to click the Vendor Name in the advanced search dropdown
    dashboard.dynamic(profileInfo.get("profileE2ETextField")).click();
   
    //validate Profile text attributes form data by iterating the vendor info map
    //and plugging in the key value to the dynamic xpath
   profileInfo.forEach(function (key, val) {
    expect(dashboard.dynamic(key)).to.exist;
    });

    //We need to assert all non text attribute types here
    
  });
});
