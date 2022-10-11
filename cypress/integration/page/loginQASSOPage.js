class loginQASSOPage {
  logInAsQA1SSO() {
    //Login as system user
    cy.get("#sso-login").click();
    cy.origin("https://login.microsoftonline.com/", () => {
      cy.get("#i0116").type("qatester1@seczetta.com");
      cy.get("#idSIButton9").click();
      cy.get("#i0118:nth-of-type(1)").type("S3cz377a#");
      cy.get("#idSIButton9").click();
      cy.get("#idBtn_Back").click();
    });
  }

  logInAsQA2SSO() {
    //Login as QA5 user
    cy.get("#sso-login").click();
    cy.origin("https://login.microsoftonline.com/", () => {
      cy.wait(5000);
      cy.get("#otherTileText").then(($btn) => {
        if ($btn.is(":visible")) {
          cy.get("#otherTileText").click();
        }
      });

      cy.get("#i0116").type("qatester2@seczetta.com");
      cy.get("#idSIButton9").click();
      cy.get("#i0118:nth-of-type(1)").type("S3cZ377a#");
      cy.get("#idSIButton9").click();
      //cy.get("#idBtn_Back").click();
    });
  }

  logInAsQA10SSO() {
    //Login as QA10 user
    cy.wait(5000);
    cy.get("#sso-login").click();
    cy.origin("https://login.microsoftonline.com/", () => {
      cy.wait(5000);
      cy.get("#otherTileText").then(($btn) => {
        if ($btn.is(":visible")) {
          cy.get("#otherTileText").click();
        }
      });

      cy.get("#i0116").type("qatester10@seczetta.com");
      cy.get("#idSIButton9").click();
      cy.get("#i0118:nth-of-type(1)").type("S3cz377a#");
      cy.get("#idSIButton9").click();
      //cy.get("#idBtn_Back").click();
    });
  }
}
export default loginQASSOPage;
