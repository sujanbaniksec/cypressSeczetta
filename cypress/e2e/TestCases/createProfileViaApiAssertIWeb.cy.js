//Import Pages being used
import dashboardPage from "../../integration/page/dashboardPage";
import createVendorRequestForm from "../../integration/page/createVendorRequestForm";
import loginPage from "../../integration/page/loginpage";
import leftNavDashboard from "../../integration/page/leftNavDashboard";
//import profileDashboard from "../../integration/page/profileDasboard";
import profileDashboard from "../../integration/page/profileDashboard";
import { expect } from "chai";
//The basic test below can be modeled for any API work needed as it makes a call, captures a response and does
//quick validation of the response.
//Next, we log into the UI and assert that the newly created profile is visible in UI
//All hardcoded data will eventually be parameterized and called from an env profile config page of some sort
describe("Create a profile via API", function () {
  it("Post to create a profile of an existing profile type on autmation.dev", function () {
    let unique = Date.now();
    let apiProfile = "API_Profile" + unique;
    cy.request({
      method: "POST",
      url: "https://automation.dev.iam2secz.com/api/profile",
      body: {
        profile: {
          profile_type_id: "5c4d57ea-fbaf-4451-9248-ff6fa412f605",
          name: apiProfile,
          status: "1",
        },
      },
      headers: {
        accept: "application/json",
        authorization: "Token token=53518ad80f264b57b52a0722741cfda4",
      },
    }).then((r) => {
      //console.log(r.body);
      expect(r.status).to.eq(201);
      expect(r.body.profile.name).to.eq(apiProfile);
    });
    //Create instances of the page classes for use in the tests
    cy.visit("https://automation.dev.iam2secz.com");
    const dashboard = new dashboardPage();
    const createVendor = new createVendorRequestForm();
    const profilesLink = new leftNavDashboard();
    const profileType = new profileDashboard();
    const login = new loginPage();
    //Login as system user
    login.loginAsSystemUser();
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
