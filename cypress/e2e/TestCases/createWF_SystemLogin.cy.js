describe("create WF", () => {
  it("Login", () => {
    cy.visit("https://automation.staging.iam2secz.com");

    cy.xpath("//input[@id='username']").type("neprofile0");
    cy.xpath("//input[@type='password']").type("S3cz377a#{enter}");
    cy.wait(1000);
    //cy.xpath("//*[@name='commit']").click;
    cy.wait(1000);
    cy.url().should("include", "/neprofile_dashboard");

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
