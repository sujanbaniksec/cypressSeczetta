class loginQA1SSOPage {

  logInAsQA1SSO() {
    //Login as system user
    cy.get("#sso-login").click();   
    cy.origin("https://login.microsoftonline.com/", () => {
      cy.get("#i0116").type("qatester1@seczetta.com");
      cy.get("#idSIButton9").click();
      cy.get("#i0118:nth-of-type(1)").type("S3cz377a#");
      cy.get("#idSIButton9").click();
      cy.get("#idBtn_Back").click();
    })
  }
}
export default loginQA1SSOPage;
