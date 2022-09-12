///<reference types="cypress"/>
const { expect } = require("chai");
//Name for Test
describe("Simple Login Test", function () {
  //This section intitializes a testData varibale for use in script
  //testdata.json file is in the fixtures folder and contains property data which is used in the login.js utility script
  let testData;
  before(function () {
    cy.fixture("testdata").then(function (datajson) {
      testData = datajson;
      return testData;
    });
  });
  //Expected out come of this part of test
  it("Login to Lifecycle and do a few other things", () => {
    cy.visit("https://dev.iam2secz.com/");
    //this calls the login method, which is in the login.js utilty file and passes in data from the testdata variable, which is ultimately derived from the
    //testdata.js file(see code from line 8-13)

    cy.login(testData);
    cy.get('[href="/neprofile_dashboard/reports"] > li').click();
    cy.get(".margin-right-small > a > .btn-reverse-charcoal").click();
    cy.get(":nth-child(1) > .nav-main > .nav-heading > .fa").click();
    cy.get(":nth-child(5) > .nav-main > .nav-heading > .nav-label").click();
    cy.get('[href="/seczetta_templating/ne_attributes"] > li').click();
    cy.get("[data-testid=inputTestId]").type("drop");
    cy.wait(500);
    cy.get('td:contains("test_design_drop-down_ne_attribute")').click();
    cy.get(".button").click();
    cy.get("#option_DateAttribute_selectric").click();
    cy.get(".label").should("have.text", "date");
  });
});
