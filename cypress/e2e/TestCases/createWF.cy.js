describe("create WF", () => {
  it("create new WF", () => {
    cy.visit("https://automation.staging.iam2secz.com");
    cy.xpath('//a[@id="sso-login"]').click;
    // Cypress.config('experimentalSessionAndOrigin', true);
    cy.origin("https://login.microsoftonline.com/", () => {
      cy.xpath("//input[@type='email']").type("qatester1@seczetta.com");
      cy.xpath("//input[@type='submit']").click;
      cy.xpath("//input[@type='password']").type("S3cz377a#");
      cy.get("//input[@type='submit']").click;
      cy.get("//*[@id='idBtn_Back']").click;
    });

    cy.get("address").screenshot;
  });
});
